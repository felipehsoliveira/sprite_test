const { test, expect } = require('@playwright/test');
const Ajv = require('ajv');
const body = require('../data/dictionary.ts')
const data = JSON.stringify(body.payload);
const update_body = JSON.stringify(body.update_payload);

test.describe('Api test API User', () => {
  test('Create an user', async ({ request }) => {
    // Make a GET request
    const response = await request.post('/v2/user', { data: data });

    // Validate status
    expect(response.status()).toBe(200);

    // Validate body
    const response_body = await response.json();

    const ajv = new Ajv();
    const validate = ajv.compile(body.schema);
    const valid = validate(response_body);

    if (!valid) {
      console.log(validate.errors);
    }

    expect(valid).toBe(true);
  });

  test('Get an user', async ({ request }) => {
    const response = await request.get(`/v2/user/${body.payload.username}`);
    expect(response.status()).toBe(200);
    const response_body = await response.json();

    const ajv = new Ajv();
    const validate = ajv.compile(body.schema_get_user);
    const valid = validate(response_body);

    if (!valid) {
      console.log(validate.errors);
    }

    expect(valid).toBe(true);
    expect(response.status()).toBe(200);

  });

  test('Update an user', async ({ request }) => {
    
    const response = await request.put(`/v2/user/username`, { data: update_body});

    // Validate status
    expect(response.status()).toBe(200);
    const response_body = await response.json();

    const ajv = new Ajv();
    const validate = ajv.compile(body.schema);
    const valid = validate(response_body);

    if (!valid) {
      console.log(validate.errors);
    }

    expect(valid).toBe(true);
  });

  test('Delete an user', async ({ request }) => {
    const response = await request.delete(`/v2/user/${body.payload.username}`);
    expect(response.status()).toBe(200);
    const response_body = await response.json();

    const ajv = new Ajv();
    const validate = ajv.compile(body.schema);
    const valid = validate(response_body);

    if (!valid) {
      console.log(validate.errors);
    }

    expect(valid).toBe(true);

  });

  
});


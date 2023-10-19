const payload = {
  id: 0,
  username: "xispirito",
  firstName: "Chapolin",
  lastName: "Colorado",
  email: "xispirito_12@email.com",
  password: "marreta_bionica123",
  phone: "+5511940028922",
  userStatus: 0
}

const update_payload = {
  id: 0,
  username: "xispirito_12",
  firstName: "xispirot",
  lastName: "string",
  email: "string",
  password: "string",
  phone: "string",
  userStatus: 0
}

const schema = {
  type: 'object',
  properties: {
    code: { type: 'number' },
    type: { type: 'string' },
    message: { type: 'string' }
  },
  required: ['code', 'type', 'message'],
  additionalProperties: false,
}

const schema_get_user = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    username: { type: 'string' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    phone: { type: 'string' },
    userStatus: { type: 'number' },
  },
  required: ['id', 'username', 'firstName', 'lastName', 'email', 'password', 'phone', 'userStatus'],
  additionalProperties: false,

}



module.exports = { payload, schema, schema_get_user, update_payload }
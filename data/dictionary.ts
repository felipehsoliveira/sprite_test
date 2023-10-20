const payload = {
  id: 0,
  username: "leia_organa12",
  firstName: "Leia",
  lastName: "Organa",
  email: "organa_leia_12@email.com",
  password: "forTheRepublic123",
  phone: "+5511940028922",
  userStatus: 0
}

const update_payload = {
  id: 0,
  username: "leia_organa13",
  firstName: "Leia",
  lastName: "Organa",
  email: "organa_leia_12@email.com",
  password: "forTheRepublic123",
  phone: "+5511940028922",
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
export const LoginSchema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
    },
  },
}

export const RegisterSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      minLength: 1,
    },
    phone_no: {
      type: 'string',
      minLength: 1,
    },
    password: {
      type: 'string',
      minLength: 6,
    },
    passwordConfirmation: {
      type: 'string',
      minLength: 6,
    },
  },
}

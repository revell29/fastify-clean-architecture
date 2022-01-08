const config = {
  app: { domain: 'localhost', port: 8000, kind: 'developement' },
  jwt: { secret: '1q@w3e4r5t6y', expires: '24h' },
  db_system: {
    host: 'localhost',
    port: 6432,
    user: 'user_system',
    password: '1234',
    database: 'db_system',
  },
  db_tenant: {
    host: 'localhost',
    port: 6432,
    user: 'user_system',
    password: '1234',
    database: 'db_tenant',
  },
  utils: { cloudinary: '' },
}

export default config

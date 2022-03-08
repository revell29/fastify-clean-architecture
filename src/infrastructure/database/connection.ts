import Promise from 'bluebird'
import pgp, { IDatabase } from 'pg-promise'
import pg, { IClient } from 'pg-promise/typescript/pg-subset'
import config from '~/infrastructure/config/constants'

/**
 * Params for connection
 */
const systemDb: pg.IConnectionParameters<IClient> = {
  host: config.db_system.host,
  port: config.db_system.port,
  database: config.db_system.database,
  user: config.db_system.user,
  password: config.db_system.password,
  idleTimeoutMillis: 30000,
  max: 10,
}

/**
 * Create a connection pool
 */
const pgPromise = pgp({
  promiseLib: Promise,
  async connect(client: pg.IClient, dc, useCount: number) {
    if (useCount === 0 && dc && dc.email) {
      const email = encodeURI(dc.email)
      await client.query(`SET SESSION "app.user" = '${email}'`)
    }
  },
})

class DbConnection {
  private db: IDatabase<IClient>

  constructor() {
    this.db = pgPromise(systemDb)
  }

  getDB(): IDatabase<IClient> {
    return this.db
  }
}

export default DbConnection

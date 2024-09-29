require('dotenv').config()
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  development: {
    client: 'postgresql',
    connection: {
      port: process.env.SUPA_DB_PORT_PROC,
      host: process.env.SUPA_DB_HOST_PROC ,
      database: process.env.SUPA_DB_NAME_PROC,
      user: process.env.SUPA_DB_USERNAME_PROC,
      password: process.env.SUPA_BD_PASSWORD_PROC
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      port: process.env.SUPA_DB_PORT_PROC,
      host: process.env.SUPA_DB_HOST_PROC,
      database: process.env.SUPA_DB_NAME_PROC,
      user: process.env.SUPA_DB_USERNAME_PROC,
      password: process.env.SUPA_BD_PASSWORD_PROC
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

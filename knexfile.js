'use strict'

// ref: https://devhints.io/knex
// TODO: implement more dynamic env var settings loader
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'db66a7753f1504',
      user: 'sperant',
      password: 'J92fRrHbtm2R+1f+czdhnQ==',
      host: 'speranttest.cavhcpvaoevd.us-east-1.rds.amazonaws.com'
    },
    pool: {
      min: 2,
      max: 10
    }
  },
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
  production: {
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
  }
}

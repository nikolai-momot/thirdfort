// Update with your config settings.
require('dotenv/config');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const config = {
  client: 'postgresql',
  version: '14.3',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};

module.exports = {
  development: config,
  staging: config,
  production: config,
};

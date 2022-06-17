'use strict';

require('dotenv/config')

const http = require('http');
const server = require('./server');

async function bootstrap() {
  /**
   * Add external services init as async operations (db, redis, etc...)
   * e.g.
   * await sequelize.authenticate()
   */
  return http.createServer(server.callback()).listen(process.env.PORT);
}

bootstrap()
  .then(bs =>
    console.log(`🚀 Server listening on port ${bs.address().port}!`),
  )
  .catch(err => {
    setImmediate(() => {
      console.error('Unable to run the server because of the following error:');
      console.error(err);
      process.exit();
    });
  });

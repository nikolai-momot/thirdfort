'use strict';

const controller = require('./notes.controller');

module.exports = Router => {
  const router = new Router({
    prefix: `/notes`,
  });

  router
    .get('/:noteId', controller.getOne)
    .put('/:noteId', controller.updateOne)
    .delete('/:noteId', controller.deleteOne)
    .get('/', controller.getAll)
    .post('/', controller.createOne);

  return router;
};

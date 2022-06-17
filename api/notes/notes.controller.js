'use strict';

const service = require('./notes.service');

exports.getOne = async ctx => {
  const { noteId } = ctx.params;
  const userId = ctx.request.headers['x-user-id'];
  const note = await service.getOne({ ...ctx.params, userId })
  ctx.assert(note, 404, `Note with ID ${noteId} doesn't exist`);
  ctx.status = 200;
  ctx.body = note;
};

exports.updateOne = async ctx => {
  const { noteId } = ctx.params;
  const userId = ctx.request.headers['x-user-id'];
  const note = await service.updateOne({ ...ctx.params, userId }, ctx.request.body)
  ctx.assert(note, 404, `Note with ID ${noteId} could not be updated`);
  ctx.status = 200;
  ctx.body = note;
};

exports.getAll = async ctx => {
  const userId = ctx.request.headers['x-user-id'];
  console.log('ctx.request.headers', ctx.request.headers)
  const notes = await service.getAll({ ...ctx.request.query, userId })
  ctx.status = 200;
  ctx.body = notes;
};

exports.createOne = async ctx => {
  const userId = ctx.request.headers['x-user-id'];
  const note = await service.createOne({ userId }, ctx.request.body)
  ctx.assert(note, 400, 'The note info is malformed!');
  ctx.status = 201;
  ctx.body = note;
};

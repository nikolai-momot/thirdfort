'use strict';

const config = require('../../knexfile.js');
const knex = require('knex');
const db = knex(config['production']); // Replace with NODE_ENV after stability

const columns = ['id', 'user_id', 'text', 'archived'];

exports.getOne = async ({ userId, noteId }) => {
  const result = await db('notes')
    .where({ id: noteId, user_id: userId })
    .first(columns);
  return result;
};

exports.getAll = async ({ userId, archived }) => {
  const result = await db('notes')
    .where({ user_id: userId, archived: archived === 'true' })
    .select(columns);
  return result;
};

exports.createOne = async ({ userId }, body) => {
  const result = await db('notes').insert(
    { ...body, user_id: userId, archived: body.archived === true },
    columns,
  );
  return result;
};

exports.updateOne = async ({ userId, noteId }, body) => {
  const result = await db('notes')
    .where({ id: noteId, user_id: userId })
    .update(
      {
        ...body,
        id: noteId,
        user_id: userId,
        archived: body.archived === true,
      },
      columns,
    );
  return result;
};

exports.deleteOne = async ({ userId, noteId }, body) => {
  const result = await db('notes')
    .where({ id: noteId, user_id: userId })
    .delete(columns);
  return result;
};

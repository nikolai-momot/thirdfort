'use strict';

const config = require('../../knexfile.js');
const knex = require('knex')
const db = knex(config['production']) // Replace with NODE_ENV after stability

const columns = [
    'id',
    'user_id',
    'text',
    'archived'
]

exports.getOne = async ({ userId, noteId }) => {
    return await db('notes').where({ id: noteId, user_id: userId }).first(columns);
};

exports.getAll = async ({ userId, archived }) => {
    return await db('notes').where({ user_id: userId, archived: !!archived }).select(columns);
};

exports.createOne = async ({ userId }, body) => {
    return await db('notes').insert({ ...body, user_id: userId })
};

exports.updateOne = async ({ userId, noteId }, body) => {
    return await db('notes').where({ id: noteId, user_id: userId }).update(columns, { ...body, id: noteId, user_id: userId });
};

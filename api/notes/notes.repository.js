'use strict';

const db = require('../../knexfile.js');

const columns = [
    'id',
    'user_id',
    'text',
    'archived'
]

exports.getOne = async ({ userId, noteId }) => {
    return db('notes').where({ id: noteId, user_id: userId }).first(columns);
};

exports.getAll = async ({ userId, archived }) => {
    return db('notes').where({ user_id: userId, archived }).select(columns);
};

exports.createOne = async ({ userId }, body) => {
    return db('notes').insert({ ...body, user_id: userId })
};

exports.updateOne = async ({ userId, noteId }, body) => {
    return db('notes').where({ id: noteId, user_id: userId }).update(columns, { ...body, id: noteId, user_id: userId });
};

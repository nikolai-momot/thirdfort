'use strict';

const repository = require('./notes.repository');

exports.getOne = async (params) => {
    const note = await repository.getOne(params);
    return note;
};

exports.getAll = async (params) => {
    const notes = await repository.getAll(params)
    return notes;
};

exports.createOne = async (params, body) => {
    const createdNote = await repository.createOne(params, body);
    return createdNote;
};

exports.updateOne = async (params, body) => {
    const existingNote = await this.getOne(params)
    const newNote = { ...existingNote, ...body }
    const updatedNote = await repository.updateOne(params, newNote)
    return updatedNote
};

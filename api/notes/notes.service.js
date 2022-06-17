'use strict';

const generateId = require('../../utils/generateId.util');
const repository = require('./notes.repository');

exports.getOne = async (params) => {
    const { noteId } = params;
    const note = await repository.getOne(note => note.id === noteId);
    return note;
};

exports.getAll = async (params) => {
    const notes = await repository.getAll(params)
    return notes;
};

exports.createOne = async (params, body) => {
    const { name } = body;
    const id = generateId();
    const newNote = {
        id,
        name,
    };
    const createdNote = await repository.create(newNote);
    return createdNote;
};

exports.updateOne = async (params, body) => {
    const existingNote = await this.getOne(params)
    const newNote = { ...existingNote, ...body }
    const updatedNote = await repository.updateOne(newNote)
    return updatedNote
};

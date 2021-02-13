const { Note } = require("../models/note.model");

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.createNote = (request, response) => {
    const { firstName, lastName, entry } = request.body;
    Note.create({
        firstName,
        lastName,
        entry
    })
        .then(note => response.json(note))
        .catch(err => response.json(err));
}
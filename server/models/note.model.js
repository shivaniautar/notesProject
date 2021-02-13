const mongoose = require('mongoose');


const NoteSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    entry:{type: String}
}, { timestamps: true });
module.exports.Note = mongoose.model('Note', NoteSchema);

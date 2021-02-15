const mongoose = require('mongoose');


const NoteSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: [true, "First Name is required"] },
    lastName: { 
        type: String,
        required: [true, "Last name is required"] },
    entry:{type: String,
        required: [true, "Entry is required"]}
}, { timestamps: true });
module.exports.Note = mongoose.model('Note', NoteSchema);

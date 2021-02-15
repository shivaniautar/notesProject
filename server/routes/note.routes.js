const NoteController = require('../controllers/note.controller');
module.exports = function(app){
    app.get('/api', NoteController.index);
    app.post('/api/notes', NoteController.createNote); //post request to create note
    app.get('/api/notes', NoteController.getAllNotes); //get all notes
    app.get('/api/notes/:id', NoteController.getNote); //get one note
    app.put('/api/notes/:id', NoteController.updateNote); // update one note
    app.delete('/api/notes/:id', NoteController.deleteNote); // delete chosen note 


}

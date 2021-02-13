const NoteController = require('../controllers/note.controller');
module.exports = function(app){
    app.get('/api', NoteController.index);
    app.post('/api/note', NoteController.createNote);
}

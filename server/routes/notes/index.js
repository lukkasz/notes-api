const notes = require('express').Router();
const Note = require('./../../models/note').Note;

notes.get('/', (req, res) => {
  Note.find().then((notes) => {
    res.send({notes})
  }, (e) => {
    res.status(400).send(e);
  })
});


notes.post('/', (req, res) => {
  var note =  new Note({
    title: req.body.title,
    content: req.body.content
  });
  
  note.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
  
});



module.exports = notes;
const mongoose = require('./../db/mongoose').mongoose;

const Note = mongoose.model('Note', {
  title: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  content: {
    type: String,
    required: true,
    minlength: 5
  }
});

module.exports = {
  Note
}
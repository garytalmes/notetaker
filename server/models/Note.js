const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  priority: {
    type: String
  }
},{
  timestamps: true
})

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
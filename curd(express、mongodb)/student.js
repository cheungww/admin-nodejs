let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

let Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
  },
  hobbies: {
    type: String,
  }
})

module.exports = mongoose.model('Student', studentSchema);
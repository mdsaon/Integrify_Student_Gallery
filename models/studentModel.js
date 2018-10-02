const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//creatte Schema

const StudentSchema = new Schema({
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  nationality: {
    type: String,
    required: false
  },
  skills: {
    type: String,
    required: false
  },
  src: {
    type: String,
    required: false
  },
  aim: {
    type: String,
    required: false
  },
  vision: {
    type: String,
    required: false
  },
  motivation: {
    type: String,
    required: false
  },
  quote: {
    type: String,
    required: false
  },
  joinedDate: {
    type: String,
    required: false
  }
});
module.exports = Student = mongoose.model("student", StudentSchema);

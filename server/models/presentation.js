const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PresentationSchema = new Schema({
  presenter: {
    type: String
  },
  evaluator: {
    type: String
  },
  topic: {
    type: String
  },
  articles: {
    type: Array
  },
  date: {
    type: Date
  },
  keywords: {
    type: Array
  },
  summary: {
    type: String
  }
});

const Presentation = mongoose.model("Presentation", PresentationSchema);

module.exports = Presentation;

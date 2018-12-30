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
  article_url: {
    type: String
  },
  presentation_date: {
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

const express = require("express");

const PresentationsRouter = express.Router();
const Presentation = require("../models/presentation");

PresentationsRouter.get("/", (req, res) => {
  Presentation.find({}, (err, presentations) => {
    if (err) {
      res.status(404).send("Data was not found");
    }
    res.json(presentations);
  });
});
PresentationsRouter.post("/", (req, res) => {
  const presentation = new Presentation({
    presenter: req.body.presenter,
    evaluator: req.body.evaluator,
    topic: req.body.topic,
    article_url: req.body.article_url,
    presentation_date: req.body.presentation_date,
    keywords: req.body.keywords,
    summary: req.body.summary
  });
  presentation.save().catch(err => console.log(err));
  res.send(presentation);
});
PresentationsRouter.get("/:presentationId", (req, res) => {
  const _id = req.params.presentationId;
  Presentation.find({ _id }, (err, presentation) => {
    if (err) {
      res.status(404).send("An error");
    }
    if (presentation.length < 1) {
      res.send("A student with that id was not found");
    }
    res.json(presentation);
  });
});
PresentationsRouter.put("/:presentationId", (req, res) => {
  const _id = req.params.presentationId;
  Presentation.findOne({ _id }, (err, presentation) => {
    if (err) {
      res.status(404).send("An error");
    }
    if (presentation.length < 1) {
      res.send("A student with that id was not found");
    }

    presentation.presenter = req.body.presenter;
    presentation.evaluator = req.body.evaluator;
    presentation.topic = req.body.topic;
    presentation.article_url = req.body.article_url;
    presentation.presentation_date = req.body.presentation_date;
    presentation.keywords = req.body.keywords;
    presentation.summary = req.body.summary;
    presentation.save(err => {
      if (err) {
        res.status(404).send(err);
      }
      console.log("Saved");
      res.send("Presentation has been updated");
    });
  });
});

PresentationsRouter.delete("/:presentationId", (req, res) => {
  const _id = req.params.presentationId;
  Presentation.findOneAndRemove({ _id }, (err, presentation) => {
    if (err) {
      res.status(404).send(err);
    }
    console.log("Saved");
    res.send(`Presentation with id ${_id} has been removed`);
  });
});

module.exports = PresentationsRouter;

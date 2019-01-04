const Presentation = require("../models/presentation");

module.exports = {
  showPresentations,
  addPresentation,
  showSinglePresentation,
  editPresentation,
  deletePresentation
};
function showPresentations(req, res) {
  Presentation.find({}, (err, presentations) => {
    if (err) {
      res.status(404).send("Data was not found");
    }
    res.json(presentations);
  });
}

function addPresentation(req, res) {
  const presentation = new Presentation({
    presenter: req.body.presenter,
    evaluator: req.body.evaluator,
    topic: req.body.topic,
    articles: req.body.articles,
    date: req.body.date,
    keywords: req.body.keywords,
    summary: req.body.summary
  });
  presentation.save().catch(err => console.log(err));
  res.send(presentation);
}

function showSinglePresentation(req, res) {
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
}

function editPresentation(req, res) {
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
    presentation.articles = req.body.articles;
    presentation.date = req.body.date;
    presentation.keywords = req.body.keywords;
    presentation.summary = req.body.summary;
    presentation.save(err => {
      if (err) {
        res.status(404).send(err);
      }
      res.send(presentation);
    });
  });
}

function deletePresentation(req, res) {
  const _id = req.params.presentationId;
  Presentation.findOneAndRemove({ _id }, (err, presentation) => {
    if (err) {
      res.status(404).send(err);
    }
    console.log("Saved");
    res.send(presentation);
  });
}

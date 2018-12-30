const express = require("express");

const PresentationsRouter = express.Router();
const {
  showPresentations,
  addPresentation,
  showSinglePresentation,
  editPresentation,
  deletePresentation
} = require("../controllers/presentations.controller");

PresentationsRouter.get("/", showPresentations);

PresentationsRouter.post("/", addPresentation);

PresentationsRouter.get("/:presentationId", showSinglePresentation);

PresentationsRouter.put("/:presentationId", editPresentation);

PresentationsRouter.delete("/:presentationId", deletePresentation);

module.exports = PresentationsRouter;

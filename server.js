const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const { MONGODB_URI } = require("./server/database/db");

const PresentationsRouter = require("./server/routes/presentations");

const port = process.env.PORT || 5000;

const app = express();

mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(err);
    }
    console.log("Database is connected");
  }
);

app.use(bodyParser.json());
app.use("/presentations", PresentationsRouter);
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

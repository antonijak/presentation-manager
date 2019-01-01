const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

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
app.use(express.static(path.join(__dirname, "/client/build")));
app.use(bodyParser.json());
app.use("/allpresentations", PresentationsRouter);
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname + "/client/public/index.html"))
);

app.listen(port, () => console.log(`Listening on port ${port}!`));

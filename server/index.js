const express = require("express");
const mongoose = require("mongoose");
const app = express();

const bodyParser = require("body-parser");
const morgan = require("morgan");
const port = 4200;

const timeLogging = require("./middleware/timeLogging");

const user = require("./routes/user");
const game = require("./routes/game");
const comment = require("./routes/comment");

app.use(timeLogging);
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/user", user);
app.use("/game", game);
app.use("/comment", comment);

app.get("/", (req, res) => {
  res.send("Honor and Glory! (server)");
});

mongoose
  .connect("mongodb://localhost:27017/honorandglory")
  .then(() => {
    app.listen(port, () => {
      console.log(`HG-Server running on port : ${port}`);
    });
  })
  .catch((error) => console.error(error));

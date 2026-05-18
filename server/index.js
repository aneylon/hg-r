const express = require("express");
const app = express();

const morgan = require("morgan");
const port = 4200;

const user = require("./routes/user");
const game = require("./routes/game");

app.use(morgan("dev"));

app.use("/user", user);
app.use("/game", game);

app.get("/", (req, res) => {
  res.send("Honor and Glory! (server)");
});

app.listen(port, () => {
  console.log(`HG-Server running on port : ${port}`);
});

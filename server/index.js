const express = require("express");
const app = express();
const port = 4200;

app.get("/", (req, res) => {
  res.send("Honor and Glory! (server)");
});

app.listen(port, () => {
  console.log(`HG-Server running on port : ${port}`);
});

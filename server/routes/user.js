const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get them users");
});

module.exports = router;

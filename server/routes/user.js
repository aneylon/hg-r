const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get them users");
});

router.post("/signin", (req, res) => {
  res.send("sign in existing user");
});

router.post("/signup", (req, res) => {
  res.send("sign up new user");
});

module.exports = router;

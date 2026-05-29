const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get them users");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log({ id });
  res.send("return user id : " + id);
});

router.post("/:id", (req, res) => {
  const { user } = req.body;
  const { id } = req.params;
  console.log({ user });
  res.send("update user : " + id);
});

router.post("/signin", (req, res) => {
  res.send("sign in existing user");
});

router.post("/signup", (req, res) => {
  res.send("sign up new user");
});

module.exports = router;

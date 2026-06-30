const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send("Get message for id : " + id);
});

router.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send("Get messages for user id : " + userId);
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send("Get comment for id : ", id);
});

router.post("/", (req, res) => {
  console.log("testrers");
  res.send({ one: "1" });
});

module.exports = router;

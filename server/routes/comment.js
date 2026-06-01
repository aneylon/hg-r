const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send("Get comment for id : ", id);
});

module.exports = router;

const express = require("express");
const Example = require("../models/Example");
const router = express.Router();

// TODO : Add Error catching around DB requests.
// TODO : Create error catching middle ware?

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const example = await Example.findById(id);

  res.status(200).json(example);
});

router.get("/", async (req, res) => {
  const examples = await Example.find();

  res.status(200).json(examples);
});

router.post("/", async (req, res) => {
  let { newItem } = req.body;
  let example = await Example.create({ text: newItem });
  res.status(200).json(example);
});

router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  const deleted = await Example.deleteOne({ _id: id });
  res.status(200).json(deleted);
});

module.exports = router;

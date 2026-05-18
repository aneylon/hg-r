const express = require("express");
const router = express.Router();

const gameTypes = [
  {
    id: "1",
    title: "Mythic Britain",
  },
  {
    id: "2",
    title: "Weird Fantasy",
  },
  {
    id: "3",
    title: "Mythic Eastern Fantasy",
  },
  {
    id: "4",
    title: "Space Opera",
  },
];

router.get("/", (req, res) => {
  res.send("get games");
});

router.get("/gameTypes", (req, res) => {
  res.send(gameTypes);
});

module.exports = router;

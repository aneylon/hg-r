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

router.post("/newGame", (req, res) => {
  console.log(req.body);
  const { gameTypeId } = req.body;
  console.log("new game", gameTypeId);
  res.send("new game : " + gameTypeId);
});

router.get("/", (req, res) => {
  res.send("get games");
});

router.get("/gameTypes", (req, res) => {
  res.send(gameTypes);
});

module.exports = router;

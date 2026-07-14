const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const secret = process.env.secret;

const createToken = (_id) => {
  return jwt.sign({ _id }, secret, { expiresIn: "3d" });
};

// Require auth to get this 
router.get("/", (req, res) => {
  res.send("get them users");
});

// Require auth to get this 
router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log({ id });
  res.send("return user id : " + id);
});

// TODO : Fix this to actually work.
router.post("/:id", (req, res) => {
  const { user } = req.body;
  const { id } = req.params;
  console.log({ user });
  res.send("update user : " + id);
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, id: user._id, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token, id: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

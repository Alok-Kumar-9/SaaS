const express = require("express");
const updateRouter = new express.Router();
const User = require("../models/users");

updateRouter.post("/updatebuy", async (req, res) => {
  try {
    let username = req.body.user;
    let resp = await User.updateOne(
      { username: username },
      { $inc: { buy: 1 } }
    );
    let results = await User.find({ username: username });

    res.json({ dataa: results[0].buy });
  } catch (err) {
    res.json({ dataa: -1 });
  }
});

updateRouter.post("/updatehelp", async (req, res) => {
  try {
    let username = req.body.user;
    let resp = await User.updateOne(
      { username: username },
      { $inc: { help: 1 } }
    );
    let results = await User.find({ username: username });

    res.json({ dataa: results[0].help });
  } catch (err) {
    res.json({ dataa: -1 });
  }
});

updateRouter.post("/updatechat", async (req, res) => {
  try {
    let username = req.body.user;
    let resp = await User.updateOne(
      { username: username },
      { $inc: { chat: 1 } }
    );
    let results = await User.find({ username: username });

    res.json({ dataa: results[0].chat });
  } catch (err) {
    res.json({ dataa: -1 });
  }
});

module.exports = updateRouter;

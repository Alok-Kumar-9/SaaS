const express = require("express");
const registerRouter = new express.Router();
const User = require("../models/users");

registerRouter.post("/userregister", async (req, res) => {
  try {
    const data = new User({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    });
    const result = await data.save();
    res.render("successreg");
  } catch (err) {
    res.render("errpage");
  }
});

module.exports = registerRouter;

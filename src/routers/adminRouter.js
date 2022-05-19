const express = require("express");
const adminRouter = new express.Router();
const User = require("../models/users");

adminRouter.post("/adminlogin", async (req, res) => {
  let user = req.body.adminusername;
  let pwd = req.body.adminpassword;

  if (user === "user001" && pwd === "Alok@2000") {
    res.render("adminprofile");
  } else {
    res.render("errpage");
  }
});

adminRouter.post("/fetchmasterdata", async (req, res) => {
  try {
    let usr = req.body.user;
    let results = await User.find();
    res.status(200).send({ data: results });
  } catch (err) {
    res.status(err.status).send({ data: results });
  }
});

module.exports = adminRouter;

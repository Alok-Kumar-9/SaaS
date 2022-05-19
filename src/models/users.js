const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
    trim: true,
  },
  username: {
    type: "string",
    required: true,
    unique: true,
    trim: true,
    minLength: 6,
  },
  password: {
    type: "string",
    required: true,
    minLength: 6,
  },
  buy: {
    type: "number",
    default: 0,
  },
  help: {
    type: "number",
    default: 0,
  },
  chat: {
    type: "number",
    default: 0,
  },
});

const User = new mongoose.model("User", userSchema);
module.exports = User;

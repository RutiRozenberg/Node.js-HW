
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
});

const userModel = mongoose.model("users", userSchema);

module.exports = {userModel}

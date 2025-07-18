// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  feedback: String,  // Make sure this is here!
});

module.exports = mongoose.model('User', userSchema);

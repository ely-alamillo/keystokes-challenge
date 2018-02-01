const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    description: { type: String },
    email: { type: String, required: true, unique: true },
    profileImg: { type: String }
  },
  { timestamps: true }
);

mongoose.model('User', userSchema);

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profileImg: { type: String, required: true }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = { User };

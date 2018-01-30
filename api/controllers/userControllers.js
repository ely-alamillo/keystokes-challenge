const User = require('../models/userModel');
const sendUserError = require('../Helpers');

const register = (req, res) => {
  const { username, firstName, lastName, description, email } = req.body;
  if (!username || !firstName || lastName || description || email) {
    return sendUserError('Please provide all information');
  }
  const newUser = new User({
    username,
    first_name: firstName,
    last_name: lastName,
    description,
    email
  });
  newUser.save((err, savedUser) => {
    if (err) return sendUserError(err, res);
    return res.json({ saved: true });
  });
};

const hello = (req, res) => {
  return res.json({ msg: 'hello from the api' });
};

module.exports = { register, hello };

const User = require('../models/userModel');
const sendUserError = require('../Helpers');

const register = (req, res) => {
  const {
    username,
    firstName,
    lastName,
    description,
    email,
    profileImg
  } = req.body;
  if (
    !username ||
    !firstName ||
    !lastName ||
    !description ||
    !email ||
    !profileImg
  ) {
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
    return res.json({ saved: true, savedUser });
  });
};

const login = (req, res) => {
  const { email } = req.body;
  if (!email) return sendUserError('An Error occured please try again', res);
  User.findOne({ email }, (err, user) => {
    if (err) return sendUserError(err, res);
    return res.json(user);
  });
};

const update = (req, res) => {
  const { firstName, lastName, description, id, profileImg } = req.body;
  if (!firstName || !lastName || !description || !profileImg) {
    return sendUserError('Please provide all info', res);
  }
  const update = { firstName, lastName, description, profileImg };
  User.findOneByIdAndUpdate(id, update, { new: true }, (err, updated) => {
    if (err) {
      return sendUserError('An error occurred please try again', res);
    }
    return res.json({ changed: true, updated });
  });
};

const allUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) return sendUserError(err, res);
    return res.json(users);
  });
};

const hello = (req, res) => {
  return res.json({ msg: 'hello from the api' });
};

module.exports = { register, hello, login, update, allUsers };

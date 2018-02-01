const User = require('../models/userModel');
const firebase = require('firebase');
const { sendUserError } = require('../helpers');

const config = {
  apiKey: 'AIzaSyBZ6JxxT8qJACLmjkNeCFYnYFECrYAaybQ',
  authDomain: 'keystokes-96197.firebaseapp.com',
  databaseURL: 'https://keystokes-96197.firebaseio.com',
  projectId: 'keystokes-96197',
  storageBucket: 'keystokes-96197.appspot.com',
  messagingSenderId: '88226751061'
};
firebase.initializeApp(config);

const register = (req, res) => {
  const { firstName, lastName, email, password, profileImg } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return sendUserError('Please provide all information', res);
  }
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      const newUser = new User({
        firstName,
        lastName,
        email,
        profileImg
      });
      newUser.save((err, savedUser) => {
        if (err) return sendUserError(err, res);
        return res.json({ saved: true, savedUser });
      });
    })
    .catch(err => {
      return res.json({ errorCode: err.code, message: err.message });
    });
};

const login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return sendUserError('Please provide email and password', res);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      User.findOne({ email }, (err, user) => {
        if (err) return sendUserError(err, res);
        return res.json(user);
      });
    })
    .catch(err => {
      res.json({ errorCode: err.code, message: err.message });
    });
};

const update = (req, res) => {
  const { firstName, lastName, description, id, profileImg } = req.body;
  if (!firstName || !lastName || !description) {
    return sendUserError('Please provide all info', res);
  }
  const update = { firstName, lastName, description };
  User.findOneAndUpdate({ _id: id }, update, { new: true }, (err, updated) => {
    if (err) {
      return sendUserError('An error occurred please try again', res);
    }
    console.log('updated', updated);
    return res.json({ changed: true, updated });
  });
};

const allUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) return sendUserError(err, res);
    return res.json(users);
  });
};

const find = (req, res) => {
  const { id } = req.body;
  User.findById(id, (err, user) => {
    if (err) return sendUserError('User not Found', res);
    return res.json(user);
  });
};

const hello = (req, res) => {
  return res.json({ msg: 'hello from the api' });
};

module.exports = { register, hello, login, update, allUsers, find };

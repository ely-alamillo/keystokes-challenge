const express = require('express');
const multer = require('multer');
const upload = multer({ dest: './uploads' });
const userControllers = require('../controllers/userControllers');

const routes = server => {
  // API Routes
  const api = express.Router();
  api.route('/test').get(userControllers.hello);
  api.route('/register').post(userControllers.register);
  api.route('/login').post(userControllers.login);
  api.route('/signout').get(userControllers.signout);
  api.route('/update').post(userControllers.update);
  api.route('/users').get(userControllers.allUsers);
  api.route('/find').post(userControllers.find);
  api.route('/upload').post(upload.single('avatar'), userControllers.upload);
  server.use('/api', api);

  // catch all for unknown routes
  server.route('*', (req, res) => {
    res.redirect('/');
  });
};

module.exports = { routes };

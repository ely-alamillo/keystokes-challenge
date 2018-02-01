const express = require('express');
const userControllers = require('../controllers/userControllers');

const routes = server => {
  // API Routes
  const api = express.Router();
  api.route('/test').get(userControllers.hello);
  api.route('/register').post(userControllers.register);
  api.route('/login').post(userControllers.login);
  api.route('/update').post(userControllers.update);
  api.route('/users').get(userControllers.allUsers);
  api.route('/find').post(userControllers.find);
  server.use('/api', api);

  // catch all for unknown routes
  server.route('*', (req, res) => {
    res.redirect('/');
  });
};

module.exports = { routes };

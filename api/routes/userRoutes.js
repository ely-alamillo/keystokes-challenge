const express = require('express');
const userControllers = require('../controllers/userControllers');

const routes = server => {
  // API Routes
  const api = express.Router();
  api.route('/test').get(userControllers.hello);
  api.route('/register').post(userControllers.register);
  api.route('/login').post(userControllers.login);
  api.route('/update').post(userControllers.update);
  api.route('/users').post(userControllers.allUsers);
  server.use('/api', api);

  // catch all for unknown routes
  server.route('*', (req, res) => {
    res.redirect('/');
  });
};

module.exports = { routes };

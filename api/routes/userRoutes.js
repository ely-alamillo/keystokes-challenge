const express = require('express');
const userControllers = require('../controllers/userControllers');

const routes = server => {
  server.route('/test').get(userControllers.hello);
};

module.exports = { routes };

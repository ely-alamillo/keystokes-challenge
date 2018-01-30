const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv').config();
const logger = console;

const corsOptions = {
  origin: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinue: true,
  optionsSuccessStatus: 204,
  credentials: true // enable set cookie
};

const server = express();

// server options for receiving/sending data
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors(corsOptions));

// static server for build
server.use(express.static(path.join(__dirname, 'client/build')));

const connect = mongoose.connect(process.env.MONGODB_URI);

connect
  .then(() => {
    const { routes } = require('./api/routes/userRoutes');
    routes(server);
    server.listen(process.env.PORT);
    logger.log('connection to MongoDB successfull...');
    logger.log(`server listening on port: ${process.env.PORT}`);
  })
  .catch(e => {
    logger.log('error connecting to MongoDB: ', e);
  });

require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const middlewares = require('./middlewares');

const api = require('./api');
const db = require('./db');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use('/api', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
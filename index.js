require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const middlewares = require('./middlewares');

const api = require('./api');
const db = require('./db');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use('/api', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
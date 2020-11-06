const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const middlewares = require('./middlewares');

const api = require('./api');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use('/api', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(8080, () => {
  console.log('App listening on port 8080');
});
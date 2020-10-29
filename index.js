const express = require('express');

const middlewares = require('./middlewares');

const api = require('./api');

const app = express();

app.use('/api', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(8080, () => {
  console.log('App listening on port 8080');
});
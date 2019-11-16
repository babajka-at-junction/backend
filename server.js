const express = require('express');

const connectDb = require('./db');
const api = require('./api');

connectDb();

const PORT = 8080;
const app = express();

app.use('/api', api);
app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log(`server is listening on ${PORT}`);
});

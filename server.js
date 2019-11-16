const express = require('express');
const cors = require('cors');

const connectDb = require('./db');
const api = require('./api');

connectDb();

const PORT = 8080;
const app = express();

app.use(cors());
app.use('/api', api);
app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log(`server is listening on ${PORT}`);
});

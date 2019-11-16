const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/junc19';
const connectDb = () => {
  return mongoose.connect(mongoDB, { useNewUrlParser: true });
};

module.exports = connectDb;

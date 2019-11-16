const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/junc19';
const connectDb = () => {
  return mongoose.connect(mongoDB, { useNewUrlParser: true });
};

module.exports = connectDb;

const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const db = require('./db').db;

router.get('/counters', async (req, res) => {
  const counters = mongoose.connection.db.collection('counters');
  res.json(await counters.find({}).toArray());
});

module.exports = router;

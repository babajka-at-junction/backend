const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const db = require('./db').db;

router.get('/counters', async (req, res) => {
  const counters = mongoose.connection.db.collection('counters');
  res.json(await counters.find({}).toArray());
});

router.get('/visits/:y/:m/:d', async (req, res) => {
  const visits = mongoose.connection.db.collection('main');
  const { y, m, d } = req.params;
  const start = new Date(`${y}-${m}-${d}T00:00:00.000Z`)
  const end = new Date(`${y}-${m}-${d}T23:59:59.000Z`)
  const q = { start_at: { $gte: start, $lt: end} };
  const data = await visits.find(q).toArray();
  let maxVisits = 0;
  const dataByCounters = data.reduce((acc, {counter_id, visits, start_at}) => {
    acc[counter_id] = acc[counter_id] || {};
    const hour = new Date(start_at).getHours();
    acc[counter_id][hour] = visits;
    maxVisits = Math.max(maxVisits, visits)
    return acc;
  }, {})
  res.json({ dataByCounters, maxVisits });
});

module.exports = router;

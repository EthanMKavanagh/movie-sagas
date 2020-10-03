const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  let queryString = 'SELECT * FROM "genres";';
  pool.query(queryString).then(result => {
    res.send(result.rows);
  }).catch(err => {
    console.error('Error in /api/movie GET:', err);
    res.sendStatus(500);
  });
});

module.exports = router;
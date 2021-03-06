const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  let queryString = `SELECT * FROM "movies" JOIN "junction" ON "movies"."id" = "junction"."movie_id" 
                    JOIN "genres" ON "junction"."genre_id" = "genres"."id" WHERE "movies"."id" = $1;`;
  pool.query(queryString, [req.params.id]).then(result => {
    res.send(result.rows);
  }).catch(err => {
    console.log('Error in :id GET:', err);
    res.sendStatus(500);
  });
});

router.get('/', (req, res) => {
  let queryString = 'SELECT * FROM "movies";';
  pool.query(queryString).then(result => {
    res.send(result.rows);
  }).catch(err => {
    console.error('Error in /api/movie GET:', err);
    res.sendStatus(500);
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Depending on how you make your junction table, this insert COULD change.
    const insertMovieGenreQuery = `
      INSERT INTO "junction" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY MAKES GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;
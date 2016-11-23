var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/warehouse_group';


router.get('/:table', function(req, res) {
  console.log('get warehouse data');
  var table = req.params.table;
  console.log('table get:', table);
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error - get warehouse data: ', err);
      res.sendStatus(500);
    } else {

    client.query('SELECT * FROM ' + table + ';', function(err, result) {
      done(); // close the connection.

      // console.log('the client!:', client);

      if(err) {
        console.log('select query error - get warehouse data ', err);
        res.sendStatus(500);
      }
      res.send(result.rows);

    });
  }
  });
});



module.exports = router;

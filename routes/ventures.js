var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Bins(){
return knex('bins');
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '*****this page is the: /ventures page' });
});
router.get('/:id', function(req, res, next) {
  res.render('index', { title: '******this page is the: /ventures/:id page' });
});



module.exports = router;

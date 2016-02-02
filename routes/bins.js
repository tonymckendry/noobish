var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Bins(){
return knex('bins');
}
// IN APP.JS is: var bins = require('./routes/ventures/:v_id/bins')


router.get('/', function(req, res, next) {
  res.render('index', { title: '***** this page is: ventures/:id/bins' });
});
router.get('/:id', function(req, res, next) {
  res.render('ventures/bins/show', { title: '***** this page is: ventures/:v_id/bins/:id' });
});


router.post('/', function(req, res, next) {

  Bins().insert(req.body).then(function(result){
    res.redirect('/ventures/:v_id/bins');
  });
});


router.post('/:id', function (req, res, next) {
  Bins().where('id', req.params.id).update(req.body)
  .then(function(result){
    res.redirect('/ventures/:v_id/bins');
  });
});

router.post('/:id/delete', function (req, res, next) {
  Bins().where('id', req.params.id).del()
  .then(function (result) {
    res.redirect('/ventures');
  })
})

module.exports = router;

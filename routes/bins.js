var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Bins(){
return knex('bins');
};

function Ventures(){
return knex('ventures');
}


// IN APP.JS is: app.use('/ventures/:id/bins', bins);


router.get('/', function(req, res, next) {
  res.render('index', { title: '***** this page is: ventures/:id/bins' });
});

router.get('/:id/bins/new', function(req, res, next) {
  Ventures().where('id', req.params.id).first().then(function (result) {
  console.log(req.params.id);
  res.render('bins/new', {venture: result});
  })
});


router.get('/:id', function(req, res, next) {
  res.render('ventures/bins/show', { title: '***** this page is: ventures/:v_id/bins/:id' });
});


router.post('/:id/bins/', function(req, res, next) {

  Bins().insert(req.body).then(function(result){
    res.redirect('/ventures/'+ req.params.id +'/bins');
  });
});


router.post('/:v_id/bins/:id', function (req, res, next) {
  Bins().where('id', req.params.id).update(req.body)
  .then(function(result){
    res.redirect('/ventures/:id/bins');
  });
});

router.post('/:id/delete', function (req, res, next) {
  Bins().where('id', req.params.id).del()
  .then(function (result) {
    res.redirect('/ventures');
  })
})

module.exports = router;

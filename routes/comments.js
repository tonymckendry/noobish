var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Ventures(){
return knex('ventures');
}

function Comments(){
return knex('comments');
}

function Bins(){
return knex('bins');
}
function Users(){
return knex('users');
}

// app.use('/ventures', comments);

router.get('/:ven_id/bins/:bin_id/comments', function (req, res, next) {
  Ventures().where('id', req.params.ven_id).first().then(function(result){
    Bins().where('id', req.params.bin_id).first().then(function(resultB){
      Comments().where('bin_id', req.params.bin_id).then(function (resultC) {
        
        Users().where('id', resultC.user_id).first().then(function (resultU) {
          console.log(resultC.user_id);
          res.render('comments/index', {venture: result, bin: resultB, comments: resultC});
        })
      })
    });
});
})

router.post('/', function(req, res, next) {

  Comments().insert(req.body).then(function(result){
    res.redirect('/ventures/'+req.params.v_id+'/bins/'+req.params.b_id);
  });
});

router.post('/:id', function (req, res, next) {
  Comments().where('id', req.params.id).update(req.body)
  .then(function(result){
    res.redirect('/ventures/'+req.params.v_id+'/bins/'+req.params.b_id);
  });
});

router.post('/:id/delete', function (req, res, next) {
  Comments().where('id', req.params.id).del()
  .then(function (result) {
    res.redirect('/ventures/'+req.params.v_id+'/bins/'+req.params.b_id);
  })
})











module.exports = router;

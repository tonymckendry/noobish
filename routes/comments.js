var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Comments(){
return knex('comments');
}

//THIS IS WHAT IS IN APP.JS:
// app.use('/ventures/:v_id/bins/:b_id/comments', comments);


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

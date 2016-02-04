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
};
function Users(){
return knex('users');
};

// app.use('/ventures', comments);





router.post('/:ven_id/bins/:bin_id/comments/:id', function (req, res, next) {
  Comments().where('id', req.params.id).update(req.body)
  .then(function(result){
    res.redirect('/ventures/'+req.params.ven_id+'/bins/'+req.params.bin_id);
  });
});

router.post('/:ven_id/bins/:bin_id/comments/:id/delete', function (req, res, next) {
  Comments().where('id', req.params.id).del()
  .then(function (result) {
    res.redirect('/ventures/'+req.params.ven_id+'/bins/'+req.params.bin_id);
  })
})



module.exports = router;

var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

// in app.js this is: app.use('/ventures', ventures);


function Ventures(){
return knex('ventures');
}
function Bins(){
return knex('bins');
}
function Users(){
return knex('users');
}
/* GET home page. */
router.get('/', function(req, res, next) {
  Ventures().then(function (results) {
    res.render('ventures', {ventures: results});
  })
});
router.get('/:ven_id', function(req, res, next) {
  Bins().where('venture_id', req.params.ven_id).then(function (results) {
    Users().where('id', results.user_id).first().then(function(user){
      console.log(user);

      res.render('ventures/show', { title: 'WELCOME TO THE BIN INDEX PAGE', ventu_id: req.params.ven_id, bins: results, user: user });
    })
  })
});




module.exports = router;

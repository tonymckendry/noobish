var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Ventures(){
return knex('ventures');
};

/* GET home page. */
//
// router.get('/ventures/auth/signin', function(req, res, next) {
//   res.render('auth/signin');
// });

router.get('/', function(req, res, next) {
  Ventures().select().then(function(results){
    if (req.cookies.user){
      res.render('index', {user: req.cookies.user, ventures: results});
    }
    else{
      res.render('landing');
    }
  })
});
router.get('/home', function(req, res, next) {
  Ventures().select().then(function(results){


  })
});


module.exports = router;

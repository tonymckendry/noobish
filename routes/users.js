var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Users(){
  return knex('users');
}



router.post('/users', function(req, res, next) {
  Users().insert(req.body).then(function(val){
    res.cookie("username", req.body.username);
    res.redirect("/");
  });
});

router.post('/users/login', function(req, res, next) {
    Users().where({username: req.body.username, password: req.body.password}).first().then(function(found){
       if (found){
         res.cookie("username", req.body.username);
         res.redirect("/");
       } else {
         res.redirect("/signin", {error: 'incorrect credentials'});
       }
    })
});


module.exports = router;

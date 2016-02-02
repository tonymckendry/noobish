var express = require('express');
var router = express.Router();
  var knex = require('../db/knex')

function Users(){
  return knex('users');
}

// /* GET users listing. */
// // router.get('/', function(req, res, next) {
// //   res.send('this is from users.js');
// // });
//
//
//
// router.post('/', function(req, res, next) {
//   Users().insert(req.body).then(function(val){
//     res.cookie("user", req.body.email);
//     res.redirect("/tickets");
//   });
// });
//
// router.post('/login', function(req, res, next) {
//     Users().where({email: req.body.email, password: req.body.password}).first().then(function(found){
//        if (found){
//          res.cookie("user", req.body.email);
//          res.redirect("/tickets");
//        } else {
//          res.redirect("/no_auth");
//        }
//     })
// });
//
// router.get('/', function(req, res, next) {
//   Users.select().then(function(users){
//     res.render("users/index", {users: users});
//   });
// });

module.exports = router;

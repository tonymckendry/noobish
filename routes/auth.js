
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt')
var passport = require('passport')

var knex = require('../db/knex')

function User(){
return knex('users');
}

router.get('/facebook', passport.authenticate('facebook'))

router.get('/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/'}),
function(req, res){
  console.log('*******///////*******')
  console.log(req.user)
  // res.cookie('user', req.user[0].id)
  // User().select().where('id', req.cookies.user).then(function(results){
    res.render('success')
  // })
})

router.get('/signup', function(req, res, next) {
    res.render("auth/signup", {button_text: "sign up"});
});

router.get('/signout', function(req, res, next) {
  res.clearCookie("username");
  res.redirect("/");
});

router.get('/signin', function(req, res, next) {
    if (req.cookies.username){
      res.redirect("/ventures");
    } else {
      res.render("auth/signin", {button_text: "sign in"});
    }
});

router.get('/:anything', function(req, res, next) {
  if (req.cookies.username){
    next();
  } else {
    res.redirect("auth/signin");
  }
});




module.exports = router;

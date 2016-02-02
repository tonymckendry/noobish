
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
  var useriD = req.user.fb_id
  if (req.user[0] !== undefined){
    console.log('IN THE AUTH IF');
    User().select().where('username', req.user[0].username).then(function(results){
      res.cookie('user', results[0].id)
      console.log(results);
      res.render('index')
    })
  } else{
    console.log('IN THE AUTH ELSE');
    console.log('UseriD = ' + useriD);
    User().select().where('fb_id', useriD).then(function(results){
      res.cookie('user', results[0].id)
      console.log(results);
      res.redirect('/auth/choose')
    })
  }
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

router.get('/choose', function(req, res, next){
  var user = req.cookies.user
  res.render('auth/choose', {user: user})
})

// router.post()

router.get('/:anything', function(req, res, next) {
  if (req.cookies.username){
    next();
  } else {
    res.redirect("auth/signin");
  }
});




module.exports = router;

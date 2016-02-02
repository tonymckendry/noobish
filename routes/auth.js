
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt')

router.get('/:anything', function(req, res, next) {
  if (req.cookies.username){
    res.redirect("/ventures");
  } else {
    res.render("auth/signin", {button_text: "sign in"});
  }
});

router.get('/signin', function(req, res, next) {
    if (req.cookies.username){
      res.redirect("/ventures");
    } else {
      res.render("auth/signin", {button_text: "sign in"});
    }
});

router.get('/signout', function(req, res, next) {
    res.clearCookie("user");
    res.render("auth/signin", {button_text: "sign in", notice: "you have been signed out"});
});

router.get('/signup', function(req, res, next) {
    res.render("auth/signup", {button_text: "sign up"});
});


module.exports = router;

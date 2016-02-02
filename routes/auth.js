
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt')


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
    res.redirect("/signin");
  }
});




module.exports = router;

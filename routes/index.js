var express = require('express');
var router = express.Router();

/* GET home page. */
// 
// router.get('/ventures/auth/signin', function(req, res, next) {
//   res.render('auth/signin');
// });

router.get('/', function(req, res, next) {
  res.render('index', { title: 'this is index.js', user: req.cookies.user });
});


module.exports = router;

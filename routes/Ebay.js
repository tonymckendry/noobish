var express = require('express');
var router = express.Router();
var app = express();
var Ebay = require('ebay');

router.get('/search', function (req, res, next) {
  res.render('search');
})

module.exports = router;

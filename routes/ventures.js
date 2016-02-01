var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JADE-Bootstrap' });
});
router.get('/:id', function(req, res, next) {
  res.render('index', { title: 'ventures/:id page' });
});



module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: '***** this page is: ventures/:id/bins' });
});
router.get('/:id', function(req, res, next) {
  res.render('ventures/bins/show', { title: '***** this page is: ventures/:v_id/bins/:id' });
});


module.exports = router;

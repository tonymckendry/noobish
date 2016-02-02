var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: '*****this page is the: /ventures page' });
// });
router.get('/:id', function(req, res, next) {
  res.render('index', { title: '******this page is the: /ventures/:id page' });
});



module.exports = router;

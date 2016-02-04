var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

// in app.js this is: app.use('/ventures', ventures);


function Ventures(){
return knex('ventures');
}
function Bins(){
return knex('bins');
}
function Users(){
return knex('users');
}
/* GET home page. */



router.get('/', function(req, res, next) {
  Ventures().then(function (results) {
<<<<<<< HEAD
    console.log('this is working!! +' + results)
    res.render('ventures/index', {ventures: results, user: req.cookies.user});
  })
});
router.get('/:id', function(req, res, next) {
  Ventures().where('id', req.params.id).first().then(function (result) {
  res.render('ventures/show', { venture: result, title: 'show an individual venture (e.g., fishing)', user: req.cookies.user });
});
=======
    res.render('ventures', {ventures: results});
  })
});
router.get('/:ven_id', function(req, res, next) {
  Bins().where('venture_id', req.params.ven_id).then(function (results) {
    Users().where('id', results.user_id).first().then(function(user){
      console.log(user);

      res.render('ventures/show', { title: 'WELCOME TO THE BIN INDEX PAGE', ventu_id: req.params.ven_id, bins: results, user: user });
    })
  })
>>>>>>> 492b82a15df98c414ed88881058c5b4a947e6bce
});




module.exports = router;

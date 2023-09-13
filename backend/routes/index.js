var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//replaces home page GET with single react page
router.get('/', function(req, res, next) {
  res.sendFile('../frontend/client/build/index.html');
});

router.get('/reacttest/', function(req, res, next) {
  res.sendFile('../frontend/client/build/index.html');
});

module.exports = router;

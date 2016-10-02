var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lucas', { title: 'Express' });
});

/* GET lucas page. */
router.get('/lucas', function(req, res, next) {
  res.render('lucas', { title: 'Lucas page' });
});

/* GET rosa page. */
router.get('/rosa', function(req, res, next) {
  res.render('rosa', { title: 'Rosa page' });
});

/* GET geovani page. */
router.get('/geovani', function(req, res, next) {
  res.render('geovani', { title: 'Geovani page' });
});

/* GET bruna page. */
router.get('/bruna', function(req, res, next) {
  res.render('bruna', { title: 'Bruna page' });
});

/* GET arthur page. */
router.get('/arthur', function(req, res, next) {
  res.render('arthur', { title: 'Arthur page' });
});

module.exports = router;

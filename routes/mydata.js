var express = require('express');
var router = express.Router();
var satya=0
/* GET home page. */
router.get('/', function(req, res, next) {
    satya=satya+1;
  res.render('mydata', { title: 'Sai Satyanarayana Gullapalli' });
});

module.exports = router;

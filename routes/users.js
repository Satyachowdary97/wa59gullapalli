var express = require('express');
var router = express.Router();
var satya=0
/* GET users listing. */
router.get('/', function(req, res, next) {
  satya=satya+1;
  res.send('User accesses are: '+satya);
});

module.exports = router;

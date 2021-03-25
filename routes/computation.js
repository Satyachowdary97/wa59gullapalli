var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    let sai=Math.floor(Math.random()*100)
  res.render('compute', {result: 'log function applied to' +sai+ 'is' +Math.log(sai)});
});

module.exports = router;
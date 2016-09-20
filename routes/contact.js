var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('simple', {title: 'Please Contact Us!' , content: 'If you have any problem please contact us'});
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Michael Yu's backend API projects - FreeCodeCamp", 
  	content: "Please use the correct sublinks to visit each projects"});
});

module.exports = router;

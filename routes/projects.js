var express = require('express');
var router = express.Router();
var headerParser = require('../Projects/headerparser.js');

	// headerparser
	router.route('/headerparser')
	  .get(function(req, res) {
		res.json(headerParser.headerParser(req,res));
	 })


module.exports = router;
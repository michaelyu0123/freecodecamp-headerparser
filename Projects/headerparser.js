exports.headerParser = function(req, res){
	req = req.headers;
	var result = {};
	var lang = req['accept-language'].split(',');
	lang = lang[0];
	var regExp = /\(([^)]+)\)/;
	var os = regExp.exec(req['user-agent'])[1];
	
	result.ipaddress = req['x-forwarded-for'];
	result.language = lang;
	result.software = os;
	

		
	  if (result !== {}) {
	    res.writeHead(200, {
	      'Content-Type': 'application/json'
	    });

	    res.end(JSON.stringify(result));
	  } else {
	    res.writeHead(404);
	    res.end();
	  }
}	
		
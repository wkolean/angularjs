var connect 	= require('connect'),
	serveStatic = require('serve-static');


connect().use(
	serveStatic('app')
).listen(5000);
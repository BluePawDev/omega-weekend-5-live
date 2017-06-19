var express = require('express');
var app = express();
var path = require('path');
var index = require('modules/routes/index');

app.use(express.static('public'));

app.use('/', index);

app.use(bodyParser.urlencoded({
	extended: true
}));

var port = process.env.PORT || 6680;

app.listen(port, function() {
	console.log('listening on:', port);
});

'use strict'
const PORT = 3000;
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/forum');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.on('connected', () => {
	console.log('Database connection successful!');
});

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var routes = require('./routes/index');
app.use('/', routes);

app.use((req, res, next) => {
	var err = new Error('Resource not found!');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.json({errorCode: err.status, message: err.message});
});

app.listen(3000, () => {
	console.log('Express app listening on port ' + PORT);
});
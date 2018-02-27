var express = require('express');
var router = require('../routes/routes.js');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended:false}));

// start a different database server when ready to add more functionality
//mongoose.connect('mongodb://kellyjacksonio:test123@ds217898.mlab.com:17898/expenses')

app.use('/', router);

module.exports = app;
// Require the module
// var express = require('express');
var bodyParser = require("body-parser");
var express = require('express');
// Set up the views directory
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Set up the Body Parser to your App
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Require the routes.js file

// app.use(express.static('../public'));
// app.use(express.static('public'))
require('./routes');

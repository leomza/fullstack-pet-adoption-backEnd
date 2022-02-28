"use strict";

var express = require('express');

var app = express();

require('dotenv').config();

var cookieParser = require('cookie-parser');

var path = require('path');

var pathToPublicFolder = path.resolve(__dirname, './public');

var morgan = require('morgan');

var cors = require('cors');

app.use(express["static"](pathToPublicFolder));
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'https://adoptyourpet.netlify.app'
})); //To show information in the console when I call the server

app.use(morgan('tiny')); //To read a cookie

app.use(cookieParser()); //Import of the routes

var registrationRoute = require('./routes/registrationRoute');

var petRoute = require('./routes/petRoute');

var userRoute = require('./routes/userRoute'); //Use of that Routes that I imported


app.use('/', registrationRoute);
app.use('/pet', petRoute);
app.use('/user', userRoute);
module.exports = app;
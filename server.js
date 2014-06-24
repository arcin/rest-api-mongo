var express = require('express'),
    wines = require('./routes/wines'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

var app = express();

app.use(bodyParser());
app.use(morgan('dev'));

app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);

app.listen(3000);
console.log('Listening on port 3000...');
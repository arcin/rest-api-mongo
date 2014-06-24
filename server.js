var express = require('express'),
    wines = require('./routes/wines'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

var app = express();

// configuration
app.use(bodyParser());
app.use(morgan('dev'));

app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);
app.put('/wines/:id', wines.updateWine);
app.post('/wines', wines.addWine);
app.delete('/wines/:id', wines.deleteWine);

app.listen(3000);
console.log('Listening on port 3000...');
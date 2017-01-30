var app = require('express')();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sgi');

app.use('/cidades', require('./controllers/cidadesController'));
app.use('/estados', require('./controllers/estadosController'));

app.listen(4000);

console.log('Running NodeJs on port 3000');
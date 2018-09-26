var express = require('express'); 
var app = express(); 
var test = require('./controllers/testcontroller')
var sequelize = require('./db');
let bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());

app.use('/test', test)

app.listen(3000, function(){
    console.log('Hey man!!!') 
});

app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});

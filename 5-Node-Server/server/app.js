require('dotenv').config();

var express = require('express'); 
var app = express(); 
var test = require('./controllers/testcontroller');
let user = require('./controllers/usercontroller'); //1
var sequelize = require('./db');
let bodyParser = require('body-parser');

sequelize.sync(); //tip: {force: true} for resetting tables
// sequelize.sync({force: true}); //tip: {force: true} for resetting tables

app.use(bodyParser.json());

app.use('/test', test)

app.use('/api/user', user); //2

//3 You could also write it this way without the require statement above.
// app.use('/api/user', require('./controllers/usercontrollers'));

app.listen(3000, function(){
    console.log('Hey man!!!') 
});

// app.use('/api/test', function(req, res){
//     res.send("This is data from the /api/test endpoint. It's from the server.");
// });

//1. We import the usercontroller.js file.

//2. We set up a route to the endpoints for the api/user route.

//3 Just another way to write out your routes. Just be consistent.
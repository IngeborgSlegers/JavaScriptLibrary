require('dotenv').config();

var express = require('express'); 
var app = express(); 
var test = require('./controllers/testcontroller');
let authTest = require('./controllers/authtestcontroller'); //4

let user = require('./controllers/usercontroller'); //1
var sequelize = require('./db');
let bodyParser = require('body-parser');

sequelize.sync(); //tip: {force: true} for resetting tables
// sequelize.sync({force: true}); //tip: {force: true} for resetting tables

app.use(bodyParser.json());

app.use(require('./middleware/headers'));

/******************
 * EXPOSED ROUTES
*******************/
app.use('/test', test);
app.use('/api/user', user); //2

//3 You could also write it this way without the require statement above.
// app.use('/api/user', require('./controllers/usercontrollers'));

/******************
 * PROTECTED ROUTES
*******************/

app.use(require('./middleware/validate-session')); //5
app.use('/authtest', authTest); //6


app.listen(3000, function(){
    console.log('App is listening on 3000') 
});

// app.use('/api/test', function(req, res){
//     res.send("This is data from the /api/test endpoint. It's from the server.");
// });

//1. We import the usercontroller.js file.

//2. We set up a route to the endpoints for the api/user route.

//3 Just another way to write out your routes. Just be consistent.

//4. We imported the the  authtestcontroller  file for access to the endpoints. 

//5. We imported the  validate-session  middleware, which will check to see if the incoming request has a token.

//6. Anything beneath the  validate-session  will require a token to access, this becoming protected. Anything above it will not require a token, remaining unprotected. Therefor, the test and user routes are not pretected, while the authtest route is protected.
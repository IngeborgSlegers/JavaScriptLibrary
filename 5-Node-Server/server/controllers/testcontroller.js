let express = require('express');
let router = express.Router();
let sequelize = require('../db');
let TestModel = sequelize.import('../models/test'); //4

/****************************************
 * Controller Method #1: Simple Response
****************************************/
    //1         //2
router.post('/one', function(req, res) {
        //3
    res.send("Test 1 went through!")
});

/****************************************
 * Controller Method #2: Persisting Data
****************************************/

router.post('/two', function (req, res) {
    let testData = "Test data for endpoint two"; //5

    TestModel //6
    .create({ //7
            //9
        testdata: testData //8
    }).then(datafromDatabase => {
        res.send("Test two went through!")
    })
});

/****************************************
 * Controller Method #3: req.body
****************************************/

router.post("/three", function (req, res) {
                    //10
    let testData = req.body.testdata.item;

    TestModel
    .create({   //11
        testdata: testData
    })
    res.send("Test three went through!")
    console.log("Test three went through");
})

// STEP 4 - USE THIS WITH POSTMAN
router.post('/four', function (req, res) {
    let testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then( //12
        function message() { //13
            res.send("Test 4 went through!")
        }
    )
})

/************************************
 * Route 5: Return data in a Promise
 ************************************/
router.post('/five', function (req, res) {
    let testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(                 //14
        function message(data) {
            res.send(data);  //15
        }
    );
});

/***********************************
 * Route 6: Return response as JSON
 **********************************/
router.post('/six', function (req, res) {
    let testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(testdata) {
            res.json({ //16
                testdata: testdata  //17
            });
        }
    )
});

/*************************
 * Route 7: Handle errors
*************************/

module.exports = router;



//1. We use the Express ROUTER object to call the post() method. This corresponds to the type of HTTP request that we are sending. POST is telling the server that the incoming request has data coming with it. You use a POST request when you sign up for an application, send an email, send a tweet, post on a wall, etc. POST sends data through HTTP to the server, which might send the data to the database to be stores.

//2. /one will be the endpoint/route we are using. Our route will be named HTTP://LOCALHOST:3000/TEST/ONE . After that, we'll run a callback function, which will fire off a response.

//3. When the client requests the given endpoint, we simply send a string in our response.

//KEYPOINT: NOTICE THAT WE ARE NOT YET TALKING TO OUR MODEL OR DATABASE. WE ARE SIMPLY SENDING AN EMPTY post AND RETURNING A STRING RESPONSE.

//4. We import the test model and store it in TestModel variable. It is convention that we use pascal casing(uppercase on both words) for a model class with Sequelize. You will find this to be true in other programming languages as well.

//5. testData is going to have a fixed string that we'll use every time a POST request comes in.

//6. We use the TestModel variable to access the model that we are using. This will grant us access to the Test model properties to Sequelize methods.

//7. .create() is a Sequelize method that allows us to create an instance of the Test model and send it off to the database, as long as the data types match the model.

//8. We pass the value of testData down to satisfy the key/value pair for the model. The string that we are sending will be the value that's stored in the variable. Currently, it is a string "Test data for endpoint two";

//9. testdata is the key in the object, and it represents the column being used in the table. 

//10. Here we use the req.body middleware provided by Express and append two more properties to it. This is what we're sending to the database. req is the actual request, and body is where our data is being held. testdata is a property of body, while item is a property of testdata. We;ll see this in Postmain in a little while.

//11. create() is a Sequelize method. It creates a SQL statement that will insert our data into the database. 

//12. We call the then() method. the then() method returns a Promise. Hense, we use this asynchronous function to force the message to wait for the insert statement to finish.

//13. The callback function will print the success message to the console once testData is done running.

//14. It's important to note that the .then() method is chained to .create(). In fact, the whole expression could be read like this in one line: 

// TestModel.create({testdata: testData}).then(function message(data) { res.send(data);});

//15. With that idea in mind, we have changed the data coming back in the response to the data that was persisted in Postgres. To be clear, after the data is persisted in the Postgres with the .create() method and in the testdata column, the .then() method returns a Promise that fires up a callback function holding the data that was just added.

// It's important to not that the DATA parameter can have any name that we want.

//16. In our callback, rather than res.send(), we will invoke the .json() method. This will, of course, package our response as json.

//17. The same object that was added to the database is now being sent back to the client and stored in a testdata property.
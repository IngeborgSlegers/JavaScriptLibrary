require('dotenv').config();

let express = require('express')
let router = express.Router()     //1
let sequelize = require('../db');
let User = sequelize.import('../models/user');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

/***********************************
** Create User Endpoint: Starter **
***********************************/
//2
router.post('/createuser', function (req, res) {

    let username = req.body.user.username;
    let pass = req.body.user.password;

    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(pass, 10) //12

    }).then(

        function createSuccess(user) {
               //5          //6     //7                 //8  //11                //9
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});

            res.json({
                user: user,
                message: 'created', //4
                sessionToken: token //10
            })
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});
        //19
router.post('/signin', function (req, res) {
            //13       //14     //15                               //16
    User.findOne( { where: { username: req.body.user.username } } ).then(
            //17
        function(user) {
            //20
            if (user) {
                    //21                //22                    //23                //24
                bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
                    //console.log("The value matches:", matches);  //25
                    //27
                    if (matches) {
                          //28
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24 });
                        res.json({  //29
                            user: user,
                            message: "successfully authenticated",
                            sessionToken: token
                        });
                    } else { //30
                        res.status(502).send({ error: "you failed, yo" });
                    };
                })
            } else {    //26
                res.status(500).send({ error: "failed to authenticate"});   //18
            }
        },
        function (err) {
            res.status(501).send({ error: "you failed, yo"});
        }
    )
})

module.exports = router;

//1. We bring in our necessary imports. Same as the testcontroller, just with a User model now.

//2. We start out our POST method for a createuser endpoint.

//3. Inside the method, we have the basics for creating a new user and returning a message in the response.

//4. Along with the user object that gets returned as JSON, we can send a message in the response.

//5. Create a variable to hold the token.

//6. .sign creates the token. It takes at least 2 parameters: the payload and the signature. You can also supply some specific options or a callbacl.

//7. This is the payload, or data we're sending. user.id is the primary key of the user table and is the number assigned to the suer when created in the database.

//8. This is the signature, which is used to help encode and decode the token. You make it anything you want, and we will make this private later.

//9. We set an option to make the token expire. Here, we're taking (seconds minutes hours); in other words, 1 day.

//10. We pass the value of the token back in our response. The server has now assigned a token to a specific user, and the cloent will have that token to work with (once we have a client).

//11. The system goes outside the current file to the .env file, where it looks for something called JWT_SECRET. The value of the secret is stored in that environment variable.

//12. We're adding the hashSync() function to our new User object so that we don't store the password in a format that is easy to read. In our code, we supply the original password and tell bcrypt to use the sale 10 times.

//13. The findOne() method is a Sequelize method that does exactly what if says: it tries to find something within the database that we tell it to look for. This is called Data Retrieval.

//14. where is an object within Sequelize that tells the database to look for something matching its properties.

//15. We're looking in the username column in the user table for one thing that matches the value passed from the client.

//16. The promise is handled within the .then() function.

//17. Here we have a function that is called when the promise is resolved, and if successful, sends the user object back in the response.

//18. Function called if the promise is rejected. We print the rror to the console.

//19. We're sending data this time, so we use router.post instead of router.get.

//20. First, we check to make sure that a match for the username was found.

//21. Before, we used bcrypt to encrypt the password. Now, we use it to decrypt the hash value and compare it to the supplied password. This is a complex task, and we let the highly reputable and revered bcrypt package handle the algorithm for doing that. As a best practice, you shouldn't try to write or use something that you have written. It will take months of your life to rebuild something that is already working.

//22. Here, we pull in the password value from the current request when the user is signing up.

//23. This pulls the hashed password password value from the database.

//24. Run a callback function that will run on either success or failure of compare.

//25. If the hashed password in the database matches the one that has been entered, print to the console that the password values match. Note that the matches variable is a boolean.

//26. Handle situations where the match fails.

//27. Here we use the callback function from the compare() method. If the username and password are a match, this will be set to true, and the expression in the conditional will execute.

//28. Upon success, we will create a new token for the session. Note that this code uses the same jwt.sign method that we used upon sign up. 

//29. We return the user object with a success message and sessionToken.

//30. If the passwords don't match or the username is not correct, we send a response telling the client that authentication did not occur.
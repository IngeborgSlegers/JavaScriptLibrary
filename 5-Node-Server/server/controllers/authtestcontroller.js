let router = require('express').Router();
let sequelize = require('../db');
let User = sequelize.import('../models/user');
let AuthTestModel = sequelize.import('../models/authtest');

/*************************************
* GET ALL ITEMS FOR INDIVIDUAL USER
*************************************/
router.get('/getall', function(req, res) {
    let userid = req.user.id;

    AuthTestModel
        .findAll({ where: { owner: userid } })
        .then(
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
});

/*************************************
* POST SINGLE ITEM FOR INDIVIDUAL USER
*************************************/
router.post('/create', function (req, res) {
    let owner = req.user.id;
    let authTestData = req.body.authtestdata.item;

    AuthTestModel
        .create({
            authtestdata: authTestData,
            owner: owner
        })
        .then(
            function createSuccess(authtestdata) {
                res.json({
                    authtestdata: authtestdata
                });
            },
            function createError(err) {
                res.send(500, err.message);
            }
        );
});

/************************************
* GET SINGLE ITEM FOR INDIVIDUAL USER
************************************/
router.get('/:id', function(req, res) {
    let data = req.params.id;
    let userid = req.user.id;

    AuthTestModel
        .findOne({ where: { id: data, owner: userid } })
        .then(
            function findOneSuccess(data) {
                res.json(data);
            },
            function findOneError(err) {
                res.send(500, err.message);
            }
        );
});

/********************************
* DELETE ITEM FOR INDIVIDUAL USER
********************************/
        //1                 //2
router.delete('/delete/:id', function(req, res) {
    let data = req.params.id; //3
    let userid = req.user.id; //4

    AuthTestModel
        .destroy({ //5
        where: { id: data, owner: userid } //6
    }).then(
        function deleteLogSuccess(data){ //7
            res.send("You removed a log");
        },
        function deleteLogError(err){ //8
            res.send(500, err.message);
        }
    );
});

/*********************************
* UPDATE ITEM FOR INDIVIDUAL USER
*********************************/
        //9     //10
router.put('/update/:id', function(req, res) {
    let data = req.params.id //11
    let authtestdata = req.body.authtestdata.item; //12

    AuthTestModel
        .update({//13
            authtestdata: authtestdata //14
        },
        {where: {id: data}} //15
        ).then(
            function updateSuccess(updatedLog) { //16
                res.json({
                    authtestdata: authtestdata
                });
            },
            function updateError(err){ //17
                res.send(500, err.message);
            }
        )
});

module.exports = router;

//1. When a DELETE request is received, the controller looks for a matching function, like what the rest of the HTTP verbs do.

//2. We specify what we're doing in our endpoint to make it easy for the user to know what is happening. The :id allows a paramter to be passed throught the URL to the server so we can use it later.

//3. This is the parameter passed throught the URL. The same way req.body points to the body of the request, req.params points to the URL.

//4. This is our userid, set when  validate-session  is called.

//5. .destroy() is a Sequelize method to remove an item from a database.

//6. We tell Sequelize what to look for in trying to find an item to delete. If nothing matches exactly, nothing is done.

//7. Callback function. This response is sent when the delete is successful.

//8. Callback function. This response is sent when the delete is unsuccessful.

//9. PUT is one of the HTTP verbs that has to be weird by not telling you what it does. PUT replaces whatever is already there with what we give it. In other words, PUT means update.

//10. To make it easier on the user, we use update in our route. We also allow a variable (id) to be passed through the URL again.

//11. The parameter taken from the URL.

//12. Our data we want to put into the database, replacing what already exists.

//13. update is a Sequelize method which takes two arguments.

//14. First argument of update. Contains an object holding the new value we want to edit into the database.

//15. Second argument of update. Tells Sequelize where to place the new data if a match is found.

//16. Callback function. Runs if update is successful and return the data entered.

//17. Callback function. Runs if update is not successful, and returns the error message.
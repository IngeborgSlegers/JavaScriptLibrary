var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.send('Hey!!! This is a test route!');
});

router.get('/about', function (req, res) {
    res.send('This is an about route!');
});

router.get('/contact', function (req, res) {
    res.send({user: 'stuff', email: 'more stuff' });
});

router.get('/projects', function (req, res) {
    res.send(projects = [proj1= 'stuff1', proj2= 'stuff2']);
});

router.get('/mycontacts', function (req, res) {
    res.send([
        {user: "name", email: "name.email.com"},
        {user: "name", email: "name.email.com"},
        {user: "name", email: "name.email.com"}
    ]);
});

module.exports = router;
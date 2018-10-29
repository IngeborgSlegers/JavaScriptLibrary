require('dotenv').config();

const express = require('express');
const app = express();
const book = require('./controllers/bookcontroller');
const sequelize = require('./db');
const bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());

app.use('/books', book)
// app.use('/api/test', function(req, res){
//     res.send("this is data from the /api/test endpoint. It's from the server.");
// })

app.listen(process.env.PORT, () => {
    console.log(`App is listening on ${process.env.PORT}.`)
})
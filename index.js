const express = require('express'); 
const app = express();
const path = require('path');
const mysql = require('mysql');
const bcrypt = require('bcrypt'); 
require('dotenv').config();
const cors=require("cors");
const bodyparser = require("body-parser")

const cool = require('cool-ascii-faces');

//parse JSON using express
app.use(express.json())

app.use(bodyparser.urlencoded({extended: true}))

app.use(cors()) 

app.get('/', (req, res) => res.send(cool()))
app.get('/cool', (req, res) => res.send(cool()))


app.listen(3001, () => {
    console.log("Server is listening at port 3001");
});
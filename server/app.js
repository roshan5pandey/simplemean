const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./route/index');
const port = 4500;
const db = process.env.DB;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
mongoose.connect(db,{useNewUrlParser:true}).then(()=>{
    console.log("coonected my data base ");
}).catch((err)=>{
    console.error(err);
})
app.use("/",route);
app.listen(port,()=>{
    console.log(`running port on this ${port}`);
})
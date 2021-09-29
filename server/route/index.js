const express = require('express');
const route = express.Router();
const Model = require('../model/Use');



route.get("/",(req,res)=>{
    res.send("roshan pandey i is a good boy");
})

route.post("/add",(req,res)=>{
    var {name,email,password} = req.body;
    const ram = new Model({
        name,
        email,
        password

    });
    ram.save((err,result)=>{
        if(err){
            console.error(err);
        }
        else{
            res.send(result);
          
        }
    });
})

module.exports  =route;
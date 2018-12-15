const express = require('express');
const app = express();
const port = 3001;
const db = require("./dbconnect")
const mongoose = require('mongoose');

const User = require("./models/user")



app.get("/",function(req,res){
    res.send("Hello")
})

app.get('/users',function(req, res){
    User.find({},function(err,data){
        if(err){
            throw err;
        }
        res.json(data);
    })

});
app.listen(port, () => console.log(`am listening on port ${port}`))

const abdullah = require('express');
const abdullah1 = abdullah.Router();

abdullah1.get('/home',function(req, res){
    res.send('Hello from User home')
})
abdullah1.get('/login',function(req, res){
    res.send('Hello from User login')
})

module.exports = abdullah1;
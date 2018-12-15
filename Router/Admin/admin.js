const express = require('express');
const router = express.Router();

router.get("/home",function(req, res){
    res.send("Hello from admin home");
})

router.get("/login",function(req, res){
    res.send("Hello from admin login");
});
module.exports = router;
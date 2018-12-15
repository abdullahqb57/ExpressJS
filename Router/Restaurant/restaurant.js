const express = require('express');
const router = express.Router();

router.get("/home",function(req, res){
    res.send("Hello from Restaurant home");
})
router.get("/login",function(req, res){
    res.send("Hello from Restaurant login");
})
module.exports = router;

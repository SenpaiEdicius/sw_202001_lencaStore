
var express = require('express');
var router = express.Router();

router.get('/yo', function(req, res){
    res.status(200).json({"Dariel Alejandro Vasquez":"0801-1998-08971"});
});

module.exports = router;
/*
var mensaje = "Hola Mundo";

var libLencaFunctions = {};

libLencaFunctions.mensaje = "Hola Mundo";
libLencaFunctions.version = "v1.0";
libLencaFunctions.sayHello = ()=>{
    console.log("Hello!");
} //ES6

module.exports = libLencaFunctions;
*/

var express = require('express');
var router = express.Router();

router.get('/version', function(req, res){
    res.status(200).json({"version":"API v1.0"});
});

module.exports = router;
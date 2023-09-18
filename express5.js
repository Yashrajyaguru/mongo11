var express = require("express");
var app = express();

var bodyParser = require('body-parser');

app.use(express.urlencoded({'extended': true}))
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.json());
app.use(bodyParser.json());

//http://localhost:5000/add

app.post("/add",function(request,response)
{
    var num1 = parseInt(request.body.num1);
    var num2 = parseInt(request.body.num2);
    var result = num1 + num2;
    response.send("addition = " + result);
});

app.all("*",function(request,response){
    response.send("no such a route defined....");
});

var portno = 5000;
app.listen(portno);
console.log("ready to accept request on server");
var express = require("express");
var app = express();

//https://localhost:5000/add/10/3
app.get("/add/:num1/:num2",function(request,response){
    var num1 = parseInt(request.params.num1);
    var num2 = parseInt(request.params.num2);
    var result = num1 + num2;
    response.send("addition = " + result);
});

app.all("*",function(request,response){
    response.send("no such a route defined....");
});

var portno = 5000;
app.listen(portno);
console.log("reday to accept request on server");
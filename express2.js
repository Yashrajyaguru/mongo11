var express = require("express");
var fs = require("fs");
var app = express();

app.get("/",function(request,response){
    fs.readFile('home.html',function(error,FileContent){
        response.send(FileContent.toString());
    });
});

app.get("/aboutus",function(request,response){
    fs.readFile('aboutus.html',function(error,FileContent){
        response.send(FileContent.toString());
    });
});

app.get("*",function(request,response){
    response.send("page not found");
});

var portno = 5000;
app.listen(portno);
console.log('ready to accept requset.....');
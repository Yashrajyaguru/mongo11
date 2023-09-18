var express = require("express");
var app = express();
var fs = require("fs");
var filename = "access.log";

//create middleware
app.use(function(request,response,next){
    let current = new Date();
    let day = current.getDate();
    let month = current.getMonth();
    let year = current.getFullYear();
    let today = day + "/" + month + "/" + year;
    let hour = current.getHours();
    let minute = current.getMinutes();
    let second = current.getSeconds();
    let time = hour + ":" + minute + ":" + second;
    let filecontent = `url = ${request.url} datetime = ${today} ${time}`;
    fs.writeFile(filename,filecontent,function(error){

    });
    next();
});

app.get("/",function(request,response){
    response.send("this root/home page  request");
});

app.get("/contactus",function(request,response){
    response.send("this is contact us page");
});

app.get("/aboutus",function(request,response){
    response.send("this is about us page");
});

app.get("*",function(request,response){
    response.send("page not found");
});

var portno = 5000;
app.listen(portno);
console.log('ready to accept request...');
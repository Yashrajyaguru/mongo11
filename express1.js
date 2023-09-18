var express = require("express");
var app = express();

app.get("/",function(request,response){
    response.send("this root/home page request");
});

app.get("/contactus",function(request,response){
    response.send("this is countact us page");
});

app.get("/aboutus",function(request,response){
    response.send("this is about us page");
});

app.get("*",function(request,response){
    response.send("page not found");
});

var portno = 5000;
app.listen(portno);
console.log('ready to accept request....');

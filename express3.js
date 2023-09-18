var express = require("express");
var app = express();
var route = "/contactus";

app.get(route,function(request,response){
    response.send("get request recevied for contactus route");
});
app.post(route,function(request,response){
    response.send("post request recevied for contactus route");
});
app.put(route,function(request,response){
    response.send("put request recevied for contactus route");
});
app.delete(route,function(request,response){
    response.send("delete request recevied for contactus route");
});

app.all("*",function(request,response){
    response.send("no such a route defined....");
});

var portno = 5000;
app.listen(portno);
console.log('ready to accept request');
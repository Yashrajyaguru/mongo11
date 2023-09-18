var http = require("http");
var server = http.createServer(function(request,response){
    //code in this method will execute for each and every request
    console.log('new request is received...');
});
server.listen(5000);
console.log('ready to accept request');
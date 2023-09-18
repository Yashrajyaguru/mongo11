var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request,response){
    var url = request.url;
    var filename = null;
    if(url == '/home')
    {
        filename = "home.html";
    }
    else if(url == '/aboutus')
    {
        filename = "aboutus.html";
    }
    else
    {
        filename = "404.html";
    }
    var FileContent = fs.readFileSync(filename);
    response.writeHead(200,{'content-type':'html'});
    response.write(FileContent.toString());
    response.end();
});
server.listen(5000);
console.log('ready to accept request');
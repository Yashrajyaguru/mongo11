var ErrorLogger = require("./ErrorLogger");
var http = require("http");
var server = http.createServer(function(request,response){
    var url = request.url;
    if (url != '/index')
    {
        var info = {}; //empty object
        let current = new Date();
        let day = current.getDate();
        let month =current.getMonth();
        let year = current.getFullYear();
        let today = day + "/" + month + "/" + year;

        info.code = 404;
        info.datetime = today;
        info.detail = 'file not found' + url;
        info.file = 'lesson21.js';
        ErrorLogger.em.emit("error",info);
        info.detail = 'some strange error occured' + url;
        ErrorLogger.em.emit("error",info);
        response.writeHead(404,{'content-type':'text/html'});
        response.write("<html><head></head><body><h1>file not found</h1></body></html>");
    }
    else
    {
        response.writeHead(200,{'content-type':'text/html'});
        response.write("<html><head></head><body><h1>welcome to site</h1></body></html>");
    }
    response.end();
});
server.listen(5000);
console.log('ready to accept request');

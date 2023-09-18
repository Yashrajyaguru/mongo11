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
    else if(url == '/courses')
    {
        filename = "courses.html";
    }
    else if(url == '/facilities')
    {
        filename = "facilities.html";
    }
    else if(url == '/events')
    {
        filename = "events.html";
    }
    else if(url == '/admissions')
    {
        filename = "admissions.html";
    }
    else if(url == '/contact')
    {
        filename = "contact.html";
    }
    else
    {
        filename = "404.html";
    }
    fs.readFile(filename,function(error,FileContent){
        response.writeHead(200,{'content-type':'html'});
        if(error==null)
        {
            response.write(FileContent.toString());
        }
        response.end();
    });
});
server.listen(5000);
console.log('ready to accpet request');
var event = require("events");
var fs = require("fs");
var em = new event.EventEmitter();
var filename = "error.log";
var MyErrorLogger = (info) =>{
    var filecontent = `\n Code= ${info.code} Time= ${info.datetime} file= ${info.file} detail= ${info.detail}`;
    fs.appendFile(filename,filecontent,function(error){
        if(error==null)
        {
            console.log('file has been create/updated successfully');
        }
    });
}
function MyAnotherErrorLogger(info)
{
    console.log('error occured 2');
    console.log(info);
}
em.on("error",info => MyErrorLogger(info));
em.addListener("error",info => MyAnotherErrorLogger(info));
module.exports.em = em;
module.exports.MyErrorLogger = MyErrorLogger;
module.exports.MyAnotherErrorLogger = MyAnotherErrorLogger;

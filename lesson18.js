var fs = require("fs");
var filename = "ramayan.txt";
var mode = 'r';
fs.open(filename,mode,function(error,file){
    if(error!=null)
    {
        console.log(error);
    }
    else
    {
        var buffer = new Buffer.alloc(8192);
        fs.read(file,buffer,0,5000,0,function(err,count){
            if(err!=null)
            {
                console.log(err);
            }
            else
            {
                console.log(count,"no of character read from file");
                console.log(buffer.slice(0,count).toString());
                fs.close(file,function(e){
                    if(e==null)
                      console.log('file closed successfully');
                })
            }
        })
    }
})
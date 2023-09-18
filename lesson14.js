var fs = require("fs");
var filename = "fruits.txt";
var filecontent = "ornage kiwi pinapple";
fs.writeFile(filename,filecontent,function(error){
    if(error==null)
    {
        console.log('file has been create/updated successfully');
    }
})
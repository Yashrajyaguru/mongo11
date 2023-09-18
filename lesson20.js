var fs = require("fs");
var old_name = "bcd.txt";
var new_name = "xyz.txt";
fs.rename(old_name,new_name,function(error){
    if(error!=null)
      console.log('file could not be deleted');
    else
      console.log('file has been renamed successfuly');
});
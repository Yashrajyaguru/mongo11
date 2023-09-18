var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
 var url = "mongodb://0.0.0.0/work";
MongoClient.connect(url,function(error,database){
    if(error!=null) //if there is error
    {
        console.log('error in connection');
        console.log(error.errmsg);
    }
    else 
    {
        console.log('connection established successfully');
    }
    database.close();
});
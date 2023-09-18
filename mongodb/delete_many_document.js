var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
//var url = "mongodb://localhost:27017/reactnode4";
const DATABASENAME = 'reactnode4'; //read only variable
var url = `mongodb://0.0.0.0/{DATABASENAME}`;
MongoClient.connect(url,function(error,database){
    if(error!=null) //if there is error
    {
        console.log('error in connection');
        console.log(error.errmsg);
    }
    else 
    {
      var db = database.db(DATABASENAME);
      var condition = {movie : 'som movie'};
        db.collection('book').deleteMany(condition,function(error,result){
            if(error)
            {
                console.log('document can not be deleted');
                console.log(error.errmsg);
            }
            else 
            {
                console.log('documents deleted successfully');
            }
        });       
    }
    
});
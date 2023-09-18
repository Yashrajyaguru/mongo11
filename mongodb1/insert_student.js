var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
const DATABASENAME = 'work'; //read only variable
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
      var document =[
        {
            name:'pratik mehta',
            age: 22,
            moblie: 1236254563,
        },
        {
            name:'om dave',
            age: 21,
            moblie: 1212121212,
        },
        {
            name:'jay thakor',
            age: 21,
            moblie: 1212120012,
        }
      ];
        db.collection('students').insertMany(document,function(error,result){
            if(error)
            {
                console.log('document can not be inserted');
                console.log(error.errmsg);
            }
            else 
            {
                console.log('students inserted successfully');
            
            }
        });
    }
    
});
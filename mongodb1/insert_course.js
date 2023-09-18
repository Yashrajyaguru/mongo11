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
             course:'php'
        },
        {
            course:'reactjs'
         },
        {
            course:'flatter'
         }
      ];
        db.collection('course').insertMany(document,function(error,result){
            if(error)
            {
                console.log('document can not be inserted');
                console.log(error.errmsg);
            }
            else 
            {
                console.log('course inserted successfully');
               
            }
        });
    }
    
});
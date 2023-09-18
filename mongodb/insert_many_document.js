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
      var document =[
        {
            movie:'som movie',
            starcast: ['abc','bcd','cde'],
            ticket: 199,
        },
        {
            place: "the easylearn academy",
            city : 'bhavnagar',
            pincode : 364001,
        }
      ];
        db.collection('book').insertMany(document,function(error,result){
            if(error)
            {
                console.log('document can not be inserted');
                console.log(error.errmsg);
            }
            else 
            {
                console.log('documents inserted successfully');
                // db.close();
            }
        });
    }
    
});
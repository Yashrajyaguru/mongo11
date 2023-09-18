var express = require('express')
var myconnection = require('./myconnection')
var app = express();
var bodyParser = require('body-parser');
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(bodyParser.json());var express = require('express')
var myconnection = require('./myconnection')
var app = express();
var bodyParser = require('body-parser');
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(bodyParser.json());
app.post("/students", function (request, response) {
    var name = request.body.name;
    var mobile = request.body.mobile;
    var age = request.body.age;
    var course = request.body.course;
    if (name === undefined || mobile === undefined || age === undefined  || course === undefined) {
        response.send('input is missing');
    }
    else {
        //check email does not exists and mobile also does not exists 
        var sql = `select id from students where name='${name}' or mobile='${mobile}' or age='${age}' or course='${course}'`;
        myconnection.con.query(sql, function (error, result) {
            if (error)
                response.send('error occured');
            else {
                var size = result.length; //length returns no of records as per query
                if (size > 0)
                    response.send(' already registered');
                else {
                    sql = `insert into students (name,mobile,age,course) values('${name}','${mobile}','${age}','${course}')`;
                    myconnection.con.query(sql, function (error, result) {
                        if (error)
                            response.send('error occured');
                        else {
                            response.send(`Account created with id ${result.insertId}`)
                        }
                    });
                }
            }
        });

    }
});
app.post("/update", function (request, response) {
    var id = request.body.id;
    var name = request.body.name;
    var mobile = request.body.mobile;
    var age = request.body.age;
    var course = request.body.course;
    var newname = request.body.newname
    if ( mobile === undefined || age === undefined || newname === undefined)
        response.send('input missing');
    else {
        var sql = `select id from students where id=${id}`;
        myconnection.con.query(sql, function (error, result) {
            if (error)
                response.send('error occured');
            else {
                //how many rows query has fetched
                var size = result.length; //length return no of rows as per query
                if (size === 0)
                    response.send('invalid attempt');
                else {
                    sql = `update students set name='${newname}' where id=${id}`;
                    myconnection.con.query(sql, function (error, result) {
                        if (error)
                            response.send('error occured');
                        else
                            response.send('update done');
                    });
                }
            }
        });
    }

});
app.delete("/students", function (request, response) {
    var id = request.body.id;
    var name = request.body.name;
    var mobile = request.body.mobile;
    var age = request.body.age;
    var course = request.body.course;
    var newname = request.body.newname
    if ( id === undefined)
        response.send('input missing');
    else {
        var sql = `select id from students where id=${id}`;
        myconnection.con.query(sql, function (error, result) {
            if (error)
                response.send('error occured');
            else {
                //how many rows query has fetched
                var size = result.length; //length return no of rows as per query
                if (size === 0)
                    response.send('invalid attempt');
                else {
                    sql = `delete from students where id=${id}`;
                    myconnection.con.query(sql, function (error, result) {
                        if (error)
                            response.send('error occured');
                        else
                            response.send('delete done');
                    });
                }
            }
        });
    }

});
app.listen(5000);
console.log('ready to accept request');
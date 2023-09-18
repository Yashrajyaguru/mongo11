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
app.post("/course", function (request, response) {
    var id = request.body.id;
    var coursename = request.body.coursename;
    if (id === undefined || coursename === undefined) {
        response.send('input is missing');
    }
    else {
        var sql = `select id from course where id='${id}' or coursename ='${coursename}'`;
        myconnection.con.query(sql, function (error, result) {
            if (error)
                response.send('error occured');
            else {
                var size = result.length; //length returns no of records as per query
                if (size > 0)
                    response.send('email/mobile is already registered');
                else {
                    sql = `insert into course (id,coursename) values('${id}','${coursename}')`;
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
    var coursename = request.body.coursename;
    var newcoursename = request.body.newcoursename;
    if (id === undefined || newcoursename === undefined)
        response.send('input missing');
    else {
        var sql = `select id from course where id=${id}`;
        myconnection.con.query(sql, function (error, result) {
            if (error)
                response.send('error occured');
            else {
                //how many rows query has fetched
                var size = result.length; //length return no of rows as per query
                if (size === 0)
                    response.send('invalid attempt');
                else {
                    sql = `update course set coursename='${newcoursename}' where id=${id}`;
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
app.delete("/course", function (request, response) {
    var id = request.body.id;
    var coursename = request.body.coursename;
    if ( id === undefined)
        response.send('input missing');
    else {
        var sql = `select id from course where id=${id}`;
        myconnection.con.query(sql, function (error, result) {
            if (error)
                response.send('error occured');
            else {
                //how many rows query has fetched
                var size = result.length; //length return no of rows as per query
                if (size === 0)
                    response.send('invalid attempt');
                else {
                    sql = `delete from course where id=${id}`;
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
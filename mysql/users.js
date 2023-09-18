var express = require('express')
var myconnection = require('./myconnection')
var pwd = require('./RandomPasswordGeneator')
const nodemailer = require('nodemailer');
var app = express();
var bodyParser = require('body-parser');
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(bodyParser.json());
var express = require('express')
var myconnection = require('./myconnection')
var pwd = require('./RandomPasswordGeneator')
const nodemailer = require('nodemailer');
var app = express();
var bodyParser = require('body-parser');
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(bodyParser.json());
const gmail = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "ankit3385@gmail.com", //sender email address
        pass: "aspzuihkezhozuts"
    }
});
async function send(receiver,sub,content)
{


































































































































































































































































































































    
    let info = await gmail.sendMail(
        {
            from: "ankit3385@gmail.com",
            to: receiver,
            subject: sub,
            html: content
        }
    )
    //console.log(info);
}
//localhost:5000/register
//input : email,mobile,password
app.post("/register", function (request, response) {
    var email = request.body.email;
    var password = request.body.password;
    var mobile = request.body.mobile;
    if (email === undefined || password === undefined || mobile === undefined) {
        response.send('input is missing');
    }
    else {
        //check email does not exists and mobile also does not exists 
        var sql = `select id from users where email='${email}' or mobile='${mobile}'`;
        myconnection.con.query(sql, function (error, result) {
            if (error)
                response.send('error occured');
            else {
                var size = result.length; //length returns no of records as per query
                if (size > 0)
                    response.send('email/mobile is already registered');
                else {
                    sql = `insert into users (email,password,mobile) values('${email}','${password}','${mobile}')`;
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

app.post("/login", function (request, response) {
    let email = request.body.email;
    let password = request.body.password;
    if (email === undefined || password === undefined) {
        response.send('input is missing');
    }
    else {
        let sql = `select id from users where  email='${email}' and password='${password}'`;
        myconnection.con.query(sql, function (error, result) {
            if (error)
                response.send('error occured');
            else {
                let size = result.length;
                if (size == 0)
                    response.send('invalid login attampt');
                else
                    response.send('login successfull');
            }
        });

    }
});

app.post("/change-password", function (request, response) {
    var userid = request.body.userid;
    var password = request.body.password; //old password
    var newpassword = request.body.newpassword;
    if (userid === undefined || password === undefined || newpassword === undefined)
        response.send('input missing');
    else {
        var sql = `select id from users where id=${userid} and password='${password}'`;
        myconnection.con.query(sql, function (error, result) {
            if (error)
                response.send('error occured');
            else {
                //how many rows query has fetched
                var size = result.length; //length return no of rows as per query
                if (size === 0)
                    response.send('invalid attempt');
                else {
                    sql = `update users set password='${newpassword}' where id=${userid}`;
                    myconnection.con.query(sql, function (error, result) {
                        if (error)
                            response.send('error occured');
                        else
                            response.send('password changed');
                    });
                }
            }
        });
    }

});
app.post("/forgot-password",function(request,response){
    var email = request.body.email;
    if(email === undefined)
    {
        response.send('input missing');
    }
    else 
    {
        var sql = `select id from users where email='${email}'`;
        myconnection.con.query(sql,function(error,result){
            if (error)
                response.send('error occured');
            else 
            {
                var size = result.length;
                if(size === 0)
                {
                    response.send('email not registered with us');
                }
                else 
                {
                    var newpassword = pwd.generate(10); //generate return 10 letter password
                    sql = `update users set password='${newpassword}' where email='${email}'`;
                    myconnection.con.query(sql,function(error,result){
                        if (error)
                            response.send('error occured');
                        else 
                        {
                            response.send('your password is reset');
                            send(email,'password recovery email',`we have just recovered your account, <br/> your new password is <b>${newpassword}</b>`);
                        }
                    });
                }
            }   
        });
    }
});
app.listen(5000);
console.log('ready to accept request');
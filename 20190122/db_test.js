var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var ejs =require('ejs');

var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'111111',
    database:'o2'
});
connection.connect();

connection.on('error', function(err) {
    console.log("[mysql error]",err);
});

var app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.listen(3003,function (req, res) {
    console.log("3003 포트 실행!!!");
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('/monitoring',function (req, res) {
    var sql = 'SELECT * FROM topic';
    connection.query(sql, function (err, topics) {
        if(err){
            console.log(err);
        }else{
            console.log(topics);
        }
        res.send(topics);
        res.render('monitoring.ejs',{topic:topics});
    })
});
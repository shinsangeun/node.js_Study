var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var http = require('http');
var _storage = multer.diskStorage({
    destination: function (req, file, db) {
        cb(null, 'upload/')
    },
    filename: function (req, file, db) {
        cb(null, file.originalname);
    }
});
//const views = require('../view_files/views');

var upload = multer({storage: _storage});
var fs = require('fs');
var mysql = require('mysql');
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
//app.local.pretty = true;

//app.use('/views',views);
app.use('/user', express.static('/uploads'));
app.set('views_files', './views');
app.set('view engine', 'jade');

app.listen(3003,function (req, res) {
    console.log("3003 포트 실행!!!");
});

app.get('/uploads', function (req, res) {
    res.render('upload');
});

app.post('/uploads',upload.single('userfile'),
    function (req, res) {
        res.send('Upload files:' + req.file.filename);
    }

);

app.get(['/topic','/topic/:id'],function (req, res) {
    var sql = 'SELECT id, title FROM topic';
    connection.query(sql, function (err, topics, fields) {
        var id = req.params.id;
        if(id){
            var sql = 'SELECT * FROM topic WHERE id=?';
            connection.query(sql, [id], function (err, topic, fields) {
                if(err){
                    console.log(err);
                } else{
                    //res.send('views', {topics:topics, topic:topic[0]});
                }
            })
        }else{
            //res.send('views', {topics:topics});
        }
    })
});

app.post('/topic', function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('/data/'+title, description, function (err) {
        if(err){
            console.log(err);
            res.status(500).send('Interval Server Error');
        }
        res.redirect('/topic/'+title);
    });
});

app.get('/topic/add',function (req, res) {
    var sql = 'SELECT id, title FROM topic';
    connection.query(sql, function (err, topics, fields) {
        if(err){
            console.log(err);
        }else{
            res.status(500).send('Interval Server Error!!');
        }
      res.render('add',{topic:topics});
    })
});

app.post('/topic/add', function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var author = req.body.author;
    var sql = 'INSERT INTO topic (title,description, author) VALUES (?,?,?)';
    connection.query(sql, [title, description, author], function (err, result, fields) {
        if(err){
            console.log(err);
            res.status(500).send('Interval Server Error');
        }else{
            res.redirect('/topic/'+result.insertId);
        }
    });
    //fs.writeFile('/data/'+title, description, function (err) {
        if(err){
            console.log(err);
            res.status(500).send('Interval Server Error');
        }
        res.redirect('/topic/'+title);

});

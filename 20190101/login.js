var http = require('http');
var express = require('express')
    , path = require('path');
var route = require('../routes');
var bodyParser = require('body-parser')
    , static = require('serve-static');

//익스프레스 생성
var app = express();
var router = express.Router();

http.createServer(app).listen(3000), function (req, res) {
    console.log("3000번 포트 실행");
};

router.route('/process/login').post(function (req, res) {
    console.log('/process/login 처리함');

    var paramName = req.params.name;

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과 입니다.</h1>');
    res.write('<div><p>Param Name: '+paramName+' </p>');
    res.write('<div><p>Param ID: '+paramId+' </p>');
    res.write('<div><p>Param Password :' +paramPassword+' </p>');
    res.write("<br><br><a href='/20190101/login.html'>로그인 페이지로 돌아가기</a>");
    res.end();
});

app.use('/', router);



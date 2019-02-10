var socketio = require('socket.io');
var cors = require('cors');
var express= require('express');
var app= express();
var http = require('http');
var fs = require('fs');

//app.use(cors());

var server = http.createServer(app).listen(3000, function () {
    console.log("서버 시작!!!");
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/chat01.html');

    console.log("READ HTML FILE====");
});
var io = socketio.listen(server);
console.log("요청 준비 완료!!!");

io.sockets.on('connection', function (socket) {
    console.log('connection info:' + socket.request.connection._peername);

    socket.remoteAddress = socket.request.connection._peername.address;
    console.log("socket remoteAddress:" + socket.remoteAddress);

    socket.remotePort = socket.request.connection._peername.port;
    console.log("socket remotePort:" + socket.remotePort);
})
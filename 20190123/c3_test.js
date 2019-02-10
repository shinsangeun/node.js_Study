var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var ejs =require('ejs');
//var c3 = require('c3');

var app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.listen(3003,function (req, res) {
    console.log("3003 포트 실행!!!");
});

app.get('/',function (req, res) {

    var chart = c3.generate({
        bindto: "#linechart",
        data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
            ]
        }
    });

});


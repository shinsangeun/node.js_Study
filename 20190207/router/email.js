var express= require('express');
var app = express();
var mysql = require('mysql');
var router = express.Router();
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
    host:'localhost',
    user:'sse',
    password:'123456',
    database: 'user'
});

//connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

router.post('/email_post',function (req, res){
    res.send("post Response");
    //console.log(req.body.email);
    //res.render('email.ejs', {'email':req.body.email})
});


router.post('/ajax_send_email',function (req, res) {
    var email = req.body.email;
    var responseData = {};

    var query = connection.query('select name from user where email=""' +email+'"',function (err, rows) {
        if(err) throw err;
        if(rows[0]){
            console.log(rows[0].name);
            responseData.result="ok";
            responseData.name=rows[0].name;
        } else {
            responseData.result = "none";
            responseData.name = "";
        }
        res.json(responseData);
    })
});

module.exports = router;
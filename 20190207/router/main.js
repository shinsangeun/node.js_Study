var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

router.get('/',function (req, res) {
    console.log('main.js loaded');
    res.sendFile(path.join(__dirname,'../public/main.html'));
});

router.post('/ajax_send_email', function (req, res) {
    console.log('ajax_send_email');
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
})

module.exports = router;
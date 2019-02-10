var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var main = require('./main');
var email = require('./email');


router.get('/',function (req, res) {
    console.log('main.js loaded');
    res.sendFile(path.join(__dirname,'../public/main.html'));
});

router.use('/main', main);
router.use('/email', email);

module.exports = router;


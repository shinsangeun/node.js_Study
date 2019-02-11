var express= require('express');
var app = express();
var router = require('./router/index');
var bodyParser = require('body-parser');
var cors = require('cors');

app.listen(3000, function () {
    console.log("start, express server on port 3000");
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(router);
app.use(cors());



app.post('/email_post',function (req, res){
    res.send("<h1> Post response "+ req.body.email+"  </h1>");
    console.log(req.body.email);
   // res.render('form.html', {'email':req.body.email})
});


app.post('/ajax_send_email', function (req, res) {
    console.log(req.body.email);
    //check validation
    var responseData = {'result' : 'ok', 'email' : req.body.email};
    res.json(responseData);
})
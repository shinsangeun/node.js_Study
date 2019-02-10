var express= require('express');
var app = express();
var router = require('./router/index');
var bodyParser = require('body-parser');


app.listen(3000, function () {
    console.log("start, express server on port 3000");
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(router);

app.post('/email_post',function (req, res){
    res.send("<h1> Post response "+ req.body.email+"  </h1>");
    console.log(req.body.email);
   // res.render('form.html', {'email':req.body.email})
});
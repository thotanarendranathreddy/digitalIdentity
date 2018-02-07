var express = require('express');
var app = express();
app.use(express.static('public'));


app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/redbus', function (req, res) {
   res.sendFile( __dirname + "/" + "redbus.html" );
})
app.get('/abhibus', function (req, res) {
   res.sendFile( __dirname + "/" + "abhibus.html" );
})
app.get('/kallada', function (req, res) {
   res.sendFile( __dirname + "/" + "kallada.html" );
})
app.get('/supreme', function (req, res) {
   res.sendFile( __dirname + "/" + "supreme.html" );
})
app.get('/create', function (req, res) {
   res.sendFile( __dirname + "/" + "create.html" );
})

var server = app.listen(8086, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
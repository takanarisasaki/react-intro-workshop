// node server.js
// npm run dev

var express = require('express');
var app = express();

app.use('/files', express.static(__dirname + '/src'));





app.get('*/', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(process.env.PORT || 8080, function() {
    console.log('Server started');
});


app.get('https://api.github.com/users/gaearon', function(req, res) {
    res.send('hello')
});
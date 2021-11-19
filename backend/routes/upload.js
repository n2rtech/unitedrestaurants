var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();

// for parsing application/json
app.use(express.json()); 

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/api/user', function (req, res) {
    console.log(req.body);
    console.log(req.body.username);
});

module.exports = app;
var http = require('http');
var express = require('express');
var app = express();

function requestHandler(request, response) {
    response.sendFile(__dirname + '/index.html');
}
app.get('/', requestHandler);
app.listen(process.env.PORT || 4000);

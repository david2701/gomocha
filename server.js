var http = require('http');
var express = require('express');
var app = express();

function requestHandler(request, response) {
    response.sendFile(__dirname + '/public/index.html');
}

app.use(express.static(__dirname + '/public')); // creates special route for handling static files (.js, .html, .css). These will automatically be served from public directory when something is requested

app.get('/', requestHandler);

app.listen(process.env.PORT || 4001);

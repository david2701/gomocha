var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var Storage = function() {
    this.orders = [];
    this.id = 0;
}

Storage.prototype.add = function(orderData) {
    this.id++;
    orderData.id = this.id;
    this.orders.push(orderData);
    return orderData;
}

var storage = new Storage();
// storage.add({drink: 'Latte', size: '16oz', price: '$2.95'});
// storage.add({drink: 'Americano', size: '20oz', price: '$3.95'});
// storage.add({drink: 'Chai', size: '12oz', price: '$1.95'});


/* ----------------------------------------- */

function requestHandler(request, response) {
    response.sendFile(__dirname + '/public/index.html');
}

app.use(express.static(__dirname + '/public')); // creates special route for handling static files (.js, .html, .css). These will automatically be served from public directory when something is requested

app.get('/api/orders/previous', function(req, res) {
    var prevOrders = storage.orders;
    console.log(prevOrders);
    res.status(200).json(prevOrders);
})

app.get('/api/orders/favorites', function(req, res) {
    res.sendStatus(200);
})
// send back list of orders from /previous
// send back list of favorited orders from /favorites
app.post('/api/orders', jsonParser, function(req, res) {
    var order = storage.add(req.body.orderData);
    res.status(201).json(order);
})

app.get('*', requestHandler);

app.listen(process.env.PORT || 4001);

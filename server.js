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
// storage.add({drink: 'Latte', size: '16oz', price: '$2.95', favorited: true});
// storage.add({drink: 'Americano', size: '20oz', price: '$3.95', favorited: true});
// storage.add({drink: 'Chai', size: '12oz', price: '$1.95', favorited: false});


/* ----------------------------------------- */

function requestHandler(request, response) {
    response.sendFile(__dirname + '/public/index.html');
}

app.use(express.static(__dirname + '/public')); // creates special route for handling static files (.js, .html, .css). These will automatically be served from public directory when something is requested

app.get('/api/orders/previous', function(req, res) {
    var prevOrders = storage.orders;
    res.json(prevOrders);
})

app.get('/api/orders/favorites', function(req, res) {
    var favOrders = storage.orders.filter(function(order) {
        return order.favorited === true;
    });
    res.json(favOrders);
})
// send back list of orders from /previous
// send back list of favorited orders from /favorites
app.post('/api/orders', jsonParser, function(req, res) {
    var order = storage.add(req.body);
    res.status(201).json(order);
    console.log(storage);
})

// once send method

app.get('*', requestHandler);

app.listen(process.env.PORT || 4001);

//
// request
//   .post('/api/pet') // '/api/orders'
//   .send({ name: 'Manny', species: 'cat' }) // the order that is being posted. Info pulled from state. Use place_id
//   //first get post when submitting order.
//   .set('X-API-Key', 'foobar')
//   .set('Accept', 'application/json')
//   .end(function(err, res){
//     // Calling the end function will send the request
//   });

  //res.body will contain order object

var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
// var database = require('./database');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', function(err) {
    console.error('Could not connect.  Error:', err);
});

console.log(process.env.MONGODB_URI);

var orderSchema = mongoose.Schema({
    username: String,
    items: Array,
    specialInstructions: String,
    selectedShop: String,
    selectedShop_id: String,
    favorited: Boolean
});

var Orders = mongoose.model('Order', orderSchema);

mongoose.connection.once('open', function() {
    console.log('connection established!');
});

var create = function(order, callback) {
    Orders.create(order, function(err, result) {
        if (err || !order) {
            console.error("Could not create order", order);
            console.log(err);
            return;
        }
        console.log("Created order", order);
        callback(null, result);
    });
};

var read = function(filter, callback) {
    Orders.find(filter, function(err, listOfOrders) { // needs to be able to find all values in an array
        if (!listOfOrders || err) {
            console.error("Could not read snippet");
            return;
        }
        console.log("Read list of orders:", listOfOrders);
        callback(null, listOfOrders);
    });
};

/* ----------------------------------------- */

function requestHandler(request, response) {
    response.sendFile(__dirname + '/public/index.html');
}

app.use(express.static(__dirname + '/public')); // creates special route for handling static files (.js, .html, .css). These will automatically be served from public directory when something is requested

app.get('/api/users/:username/orders/previous', function(req, res) {
    console.log(req.params);
    read({username: req.params.username}, function(err, listOfOrders) {
        res.json(listOfOrders);
    })
})

app.get('/api/users/:username/orders/favorites', function(req, res) {
    console.log(req.params);
    read({
        favorited: true,
        username: req.params.username
        }, function(err, listOfOrders) {
            res.json(listOfOrders);
    })
})
// send back list of orders from /previous
// send back list of favorited orders from /favorites
app.post('/api/orders', jsonParser, function(req, res) {
    create(req.body, function(err, order) {
        res.json(order);
    });
})

app.post('/api/orders/remove', jsonParser, function(req, res) {
    Orders.remove({}, function(err) {
        console.log('collection removed');
        res.status(201);
    });
})

app.get('*', requestHandler);

var test = function() {
    console.log('app listening on port 4000');
}

app.listen(process.env.PORT || 4000, test);

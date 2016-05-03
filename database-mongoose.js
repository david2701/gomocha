var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
// var database = require('./database');
var MongoClient = require('mongodb').MongoClient;

var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/');

    mongoose.connection.on('error', function(err) {
        console.error('Could not connect.  Error:', err);
    });

    mongoose.connection.once('open', function() {
       var snippetSchema = mongoose.Schema({
           name: {type: String, unique: true},
           content: String
        });

        var Snippet = mongoose.model('Snippet', snippetSchema);
    });

    var create = function(order, callback) {
        console.log(order);
        collection.insert(order, function(err, result) {
            if (err) {
                console.error("Could not create order");
                console.log(err);
                db.close();
                return;
            }
            console.log("Created order");
            callback(null, result.ops[0]);
            // db.close();
        });
    };

    // repeat process with read, call callback with listOfOrders

    var read = function(callback) {
        // var query = {
        //     name: name
        // };
        collection.find().toArray(function(err, listOfOrders) {
            if (!listOfOrders || err) {
                console.error("Could not read orders");
                db.close();
                return;
            }
            console.log("Read list of orders:", listOfOrders);
            callback(null, listOfOrders)
            // db.close();
        });
    };

    /* ----------------------------------------- */

    function requestHandler(request, response) {
        response.sendFile(__dirname + '/public/index.html');
    }

    app.use(express.static(__dirname + '/public')); // creates special route for handling static files (.js, .html, .css). These will automatically be served from public directory when something is requested

    app.get('/api/orders/previous', function(req, res) {
        read(function(err, listOfOrders) {
            res.status(201).json(listOfOrders);
        })
    })
    //
    app.get('/api/orders/favorites', function(req, res) {
        read(function(err, listOfOrders) {
            var favOrders = listOfOrders.filter(function(order) {
                return order.favorited === true;
                res.status(201).json(favOrders);
            })
        })

        var favOrders = storage.orders.filter(function(order) {
            return order.favorited === true;
        });
        res.json(favOrders);
    })
    // send back list of orders from /previous
    // send back list of favorited orders from /favorites
    app.post('/api/orders', jsonParser, function(req, res) {
        create(req.body, function(err, order) {
            res.status(201).json(order);
        });
    })

    // once send method

    app.get('*', requestHandler);

    var test = function() {
        console.log('app listening on port 4001');
    }

    app.listen(process.env.PORT || 4001, test);




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

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

var orderSchema = mongoose.Schema({
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

app.get('/api/orders/previous', function(req, res) {
    read({}, function(err, listOfOrders) {
        res.status(201).json(listOfOrders);
    })
})
//
app.get('/api/orders/favorites', function(req, res) {
    read({favorited: true}, function(err, listOfOrders) {
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
        console.log('collection removed')
        res.status(201);
    });
})

// once send method

app.get('*', requestHandler);

var test = function() {
    console.log('app listening on port 4001');
}

app.listen(process.env.PORT || 4001, test);

/* ----------------------------------------- */

// MongoClient.connect('mongodb://localhost/', function(err, db) {
//     if (err) {
//         console.error(err);
//         db.close();
//         return;
//     }
//     console.log('Connected to MongoDB database');
//
//     var collection = db.collection('orders');
//
//     var create = function(order, callback) {
//         console.log(order);
//         collection.insert(order, function(err, result) {
//             if (err) {
//                 console.error("Could not create order");
//                 console.log(err);
//                 db.close();
//                 return;
//             }
//             console.log("Created order");
//             callback(null, result.ops[0]);
//             // db.close();
//         });
//     };
//
//     // repeat process with read, call callback with listOfOrders
//
//     var read = function(callback) {
//         // var query = {
//         //     name: name
//         // };
//         collection.find().toArray(function(err, listOfOrders) {
//             if (!listOfOrders || err) {
//                 console.error("Could not read orders");
//                 db.close();
//                 return;
//             }
//             console.log("Read list of orders:", listOfOrders);
//             callback(null, listOfOrders)
//             // db.close();
//         });
//     };
//
//     /* ----------------------------------------- */
//
//     function requestHandler(request, response) {
//         response.sendFile(__dirname + '/public/index.html');
//     }
//
//     app.use(express.static(__dirname + '/public')); // creates special route for handling static files (.js, .html, .css). These will automatically be served from public directory when something is requested
//
//     app.get('/api/orders/previous', function(req, res) {
//         read(function(err, listOfOrders) {
//             res.status(201).json(listOfOrders);
//         })
//     })
//     //
//     app.get('/api/orders/favorites', function(req, res) {
//         read(function(err, listOfOrders) {
//             var favOrders = listOfOrders.filter(function(order) {
//                 return order.favorited === true;
//                 res.status(201).json(favOrders);
//             })
//         })
//
//         var favOrders = storage.orders.filter(function(order) {
//             return order.favorited === true;
//         });
//         res.json(favOrders);
//     })
//     // send back list of orders from /previous
//     // send back list of favorited orders from /favorites
//     app.post('/api/orders', jsonParser, function(req, res) {
//         create(req.body, function(err, order) {
//             res.status(201).json(order);
//         });
//     })
//
//     // once send method
//
//     app.get('*', requestHandler);
//
//     var test = function() {
//         console.log('app listening on port 4001');
//     }
//
//     app.listen(process.env.PORT || 4001, test);
//
// });



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

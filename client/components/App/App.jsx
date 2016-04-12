import React from 'react'
import { Link } from 'react-router'
import dummyData from '../../../dummy-data.json'
import sass from './app.scss'
import AddItemNotification from '../CustomOrderView/AddItemNotification/AddItemNotification'
import _ from 'lodash'

var App = React.createClass({

    getInitialState: function() {
        return {
            shops: [],
            selectedShop: {},
            items: [],
            specialInstructions: '',
            notification: false,
            methodOfTrans: '',
            pickupTime: '',
            favorite: false,
            paymentInfo: {
                nameOnCard: '',
                cardNumber: undefined,
                expMonth: '',
                expYear: '',
                cvv: undefined
            },
        }
    },

    componentWillMount: function() {
        this._getLocation();
    },

    _getLocation: function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._getShops);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    },

    _getShops: function(position) {
        var self = this;
        var currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        // Specify location, radius and place types for your Places API search.
        var request = {
            location: currentLocation,
            radius: '2000',
            types: ['cafe']
        };
        // Create the PlaceService and send the request.
        // Handle the callback with an anonymous function.
        var service = new google.maps.places.PlacesService(map);

        service.nearbySearch(request, function(results, status) {
            console.log(status);
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log(results);
                self._handleCoffeeShopState(results);
            }
        });
    },

    _handleCoffeeShopState: function(results) {
        this.setState({
            shops: results
        })
    },

    _handleSelectedShop: function(shop) {
        console.log('selected shop');
        this.setState({
            selectedShop: shop
        })
    },

    _handleMethodOfTrans: function(event) {
        this.setState({
            methodOfTrans: event.target.value
        })
    },

    _handlePickupTime: function(newValue) {
        this.setState({
            pickupTime: newValue
        })
    },

    _handleFavorite: function() {
        this.setState({
            favorite: !this.state.favorite
        })
    },

    _handleCCName: function(event) {
        var newPaymentInfo = _.assign(
            {},
            this.state.paymentInfo,
            {nameOnCard: event.target.value}
        )
        this.setState({
            paymentInfo: newPaymentInfo
        })
    },

    _handleCCNumber: function(event) {
        var newPaymentInfo = _.assign(
            {},
            this.state.paymentInfo,
            {cardNumber: event.target.value}
        )
        this.setState({
            paymentInfo: newPaymentInfo
        })
    },

    _handleCCExpMonth: function(event) {
        var newPaymentInfo = _.assign(
            {},
            this.state.paymentInfo,
            {expMonth: event.target.value}
        )
        this.setState({
            paymentInfo: newPaymentInfo
        })
    },

    _handleCCExpYear: function(event) {
        var newPaymentInfo = _.assign(
            {},
            this.state.paymentInfo,
            {expYear: event.target.value}
        )
        this.setState({
            paymentInfo: newPaymentInfo
        })
    },

    _handleCCCVV: function(event) {
        var newPaymentInfo = _.assign(
            {},
            this.state.paymentInfo,
            {cvv: event.target.value}
        )
        this.setState({
            paymentInfo: newPaymentInfo
        })
    },

    _toggleNotification: function() {
        this.setState({
            notification: !this.state.notification
        });
        var clearNotification = () => {
            this.setState({
                notification: false
            })
        };
        setTimeout(clearNotification, 3000);
    },

    _handleSpecialInstructions: function(event) {
        this.setState({
            specialInstructions: event.target.value
        })
    },

    _handleAddItemToOrder: function(itemDetails) {
        this.setState({
            items: this.state.items.concat(itemDetails),
        });
    },

    _handleDeleteItemFromOrder: function(index) {
        var items = this.state.items;
        items.splice(index, 1);
        this.setState({
            items: items
        })
    },

    render: function() {
        return (
            <div>
                <AddItemNotification
                toggleNotification={this.props.toggleNotification}
                notificationState={this.props.notificationState} />

                <nav className="main-nav">
                    <ul role="nav">
                        <Link to="/" onlyActiveOnIndex={true} className='router-link'><li>Dashboard</li></Link>
                        <Link to="/account" className='router-link'><li>Account</li></Link>
                        <Link to="/log-out" className='router-link'><li>Log Out</li></Link>
                    </ul>
                </nav>
                {React.cloneElement(this.props.children
                     ,{
                         data: dummyData,
                         shops: this.state.shops,
                         selectedShop: this.state.selectedShop,
                         items: this.state.items,
                         handleSelectedShop: this._handleSelectedShop,
                         handleSpecialInstructions: this._handleSpecialInstructions,
                         specialInstructions: this.state.specialInstructions,
                         notification: this.state.notification,
                         toggleNotification: this._toggleNotification,
                         handleAddItemToOrder: this._handleAddItemToOrder,
                         handleDeleteItemFromOrder: this._handleDeleteItemFromOrder,
                         handleMethodOfTrans: this._handleMethodOfTrans,
                         handlePickupTime: this._handlePickupTime,
                         pickupTime: this.state.pickupTime,
                         handleFavorite: this._handleFavorite,
                         favorite: this.state.favorite,
                         handleCCName: this._handleCCName,
                         handleCCNumber: this._handleCCNumber,
                         handleCCExpMonth: this._handleCCExpMonth,
                         expMonth: this.state.paymentInfo.expMonth,
                         handleCCExpYear: this._handleCCExpYear,
                         expYear: this.state.paymentInfo.expYear,
                         handleCCCVV: this._handleCCCVV
                     })
                    }
            </div>
        )
    }
});

module.exports = App;

import React from 'react'
import { Link } from 'react-router'
import dummyData from '../../../dummy-data.json'
import sass from './app.scss'
import AddItemNotification from '../CustomOrderView/AddItemNotification/AddItemNotification'
import _ from 'lodash'
import api from '../../api'

var App = React.createClass({

    getInitialState: function() {
        return {
            userLocation: {
                lat: '',
                lng: ''
            },
            shops: [],
            selectedShop: {},
            selectedShopLocation: {
                lat: '',
                lng: ''
            },
            distance: '',
            duration: '',
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

    // INITIAL API CALL

    // Calls the getLocation function which returns the user's current location
    // and passes it to its callback (_handleGetLocation)
    componentWillMount: function() {
        api.getLocation(this._handleGetLocation, this._handleUserLocation);
    },

    _handleUserLocation: function(position) {
        this.setState({
            userLocation: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        })
    },

    // Takes the user's current location from api.getLocation and passes it as the
    // first parameter to api.getShops. getShops uses this location to produce a
    // list of coffee shops within a specified radius from the user's location.
    // It also passes _handleCoffeeShopState as a second parameter, which takes the
    // results (array of objects) and sets it to this.state.shops
    _handleGetLocation: function(position) {
        api.getShops(position, this._handleCoffeeShopState)
    },

    _handleCoffeeShopState: function(results) {
        this.setState({
            shops: results
        })
    },

    // API CALL IN RESPONSE TO USER SELECTING SHOP

    // Calls api.getDetails and passes in selected shop's place_id (shop object is about to
    // be set to this.state.selectedShop), allowing google maps api to retrieve the
    // details of the user's selected shop. It passes in _handleSelectedShopDetails as a
    // callback, which gets passed the 'place' in getDetails and overwrites previous setState
    // and sets this.state.selectedShop to place, which contains all details of shop
    _handleSelectedShop: function(shop) {
        api.getDetails(shop.place_id, this._handleSelectedShopDetails);
        this.setState({
            selectedShop: shop
        })
    },

    // This function is the second argument to getDetails, which takes the place object, and
    // sets it on this.state.selectedShop. It then calls _handleSelectedShopCoords and passes
    // the place object as its argument
    _handleSelectedShopDetails: function(place) {
        this.setState({
            selectedShop: place
        })
        this._handleSelectedShopLocation(place);
    },

    // This function receives the place object from _handleSelectedShopDetails, which contains
    // all the shop details, and then accesses the shop's coordinates on the place object, and
    // then sets those coordinates to this.state.selectedShopCoords.lat/lng
    _handleSelectedShopLocation: function(place) {
        this.setState({
            selectedShopLocation: {
                lat: place.geometry.access_points[0].location.lat,
                lng: place.geometry.access_points[0].location.lng
            },
        })
    },

    // sets user method of transportation to this.state.methodOfTrans and subsequently makes api call
    // to calculate distance and duration given user's selected method of transportation
    _handleMethodOfTrans: function(event) {
        this.setState({
            methodOfTrans: event.target.value
        })
        api.calculateTravelTime(
            this.state.userLocation,
            this.state.selectedShopLocation,
            this.state.methodOfTrans,
            this._handleDistanceAndDuration
        );
    },

    
    _handleDistanceAndDuration: function(response) {
        this.setState({
            distance: response.rows[0].elements[0].distance.text,
            duration: response.rows[0].elements[0].duration.text
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
                         distance: this.state.distance,
                         duration: this.state.duration,
                         handleSpecialInstructions: this._handleSpecialInstructions,
                         specialInstructions: this.state.specialInstructions,
                         notification: this.state.notification,
                         toggleNotification: this._toggleNotification,
                         handleAddItemToOrder: this._handleAddItemToOrder,
                         handleDeleteItemFromOrder: this._handleDeleteItemFromOrder,
                         handleMethodOfTrans: this._handleMethodOfTrans,
                         methodOfTrans: this.state.methodOfTrans,
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

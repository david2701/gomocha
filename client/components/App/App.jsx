import React from 'react'
import NavAndTitle from '../NavAndTitle/NavAndTitle'
import MenuFormContainer from '../MenuFormContainer/MenuFormContainer'
import OrderTotal from '../OrderTotal/OrderTotal'


// NEXT STEPS:

// ???? combine dummyData into single file
// create views for other pages and switch out root component in meantime
// react router implementation
// implement propTypes to components

// DONE use setTimeout for add item to order notification/confirmation
// DONE user cannot add item unless all form elements are filled out
// DONE clear all form elements after add to order button is clicked
// DONE delete functionality on orderTotal
// DONE onChange, plus button appears to add item to order -- callback
// DONE onChange, plus button appears to add item to order -- callback
// DONE after user clicks add to order button -> quantity, size, drink name, and price are sent to table row component -- state callback
// DONE order total is calculated with each add to order click by summing all component prices -- state callback
// DONE tax is included in order total calculation

var App = React.createClass({

    getInitialState: function() {
        return {
            items: [],
            notification: false
        }
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

    propTypes: {
        toggleNotification: React.PropTypes.func,
        notificationState: React.PropTypes.bool,
        handleAddItemToOrder: React.PropTypes.func,
        orderItems: React.PropTypes.array,
        handleDeleteItemFromOrder: React.PropTypes.func
  },

    render: function() {
        return (
            <div>
                <NavAndTitle
                    title='Create Your Order'
                    toggleNotification={this._toggleNotification}
                    notificationState={this.state.notification} />
                <MenuFormContainer
                    data={this.props.data}
                    handleAddItemToOrder={this._handleAddItemToOrder}
                    toggleNotification={this._toggleNotification} />
                 <OrderTotal
                     orderItems={this.state.items}
                     handleDeleteItemFromOrder={this._handleDeleteItemFromOrder} />
            </div>
        )
    }
});

module.exports = App;

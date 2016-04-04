import React from 'react'
import NavAndTitle from '../../NavAndTitle/NavAndTitle'
import MenuFormContainer from '../MenuFormContainer/MenuFormContainer'
import OrderTotal from '../OrderTotal/OrderTotal'


var CustomOrderView = React.createClass({

    getInitialState: function() {
        return {
            items: [],
            notification: false
        }
    },

    contextTypes: {
      router: React.PropTypes.object
    },

    _handleNext: function() {
        const path = `/additional-info`
        this.context.router.push(path)
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
                 <button onClick={this._handleNext} className="next-button">Next</button>
            </div>
        )
    }
});

module.exports = CustomOrderView;

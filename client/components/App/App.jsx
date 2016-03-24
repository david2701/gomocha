import React from 'react'
import NavAndTitle from '../NavAndTitle/NavAndTitle'
import MenuFormContainer from '../MenuFormContainer/MenuFormContainer'
import OrderTotal from '../OrderTotal/OrderTotal'

var App = React.createClass({
    getInitialState: function() {
        return {
            items: []
        }
    },

    _handleAddItemToOrder: function(itemDetails) {
        this.setState({
            items: this.state.items.concat(itemDetails)
        })
    },

    render: function() {
        return (
            <div>
                <NavAndTitle />
                <MenuFormContainer
                    data={this.props.data}
                    handleAddItemToOrder={this._handleAddItemToOrder}
                     />
                 <OrderTotal orderItems={this.state.items} />
            </div>
        )
    }
});

module.exports = App;

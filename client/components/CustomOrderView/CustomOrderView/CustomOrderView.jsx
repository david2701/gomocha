import React from 'react'
import MenuFormContainer from '../MenuFormContainer/MenuFormContainer'
import OrderTotal from '../OrderTotal/OrderTotal'
import AddItemNotification from '../AddItemNotification/AddItemNotification'
import { Link } from 'react-router'
import sass from '../../App/app.scss'

var CustomOrderView = React.createClass({

    render: function() {
        return (
            <div>
                <AddItemNotification
                toggleNotification={this.props.toggleNotification}
                notificationState={this.props.notification} />
            <h1>Place Your Order</h1>
                <MenuFormContainer
                    data={this.props.data}
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleNotification={this.props.toggleNotification} />
                 <OrderTotal
                     orderItems={this.props.items}
                     handleDeleteItemFromOrder={this.props.handleDeleteItemFromOrder} />
                 <Link to="/additional-info"><button className="next-button">Next</button></Link>
            </div>
        )
    }
});

module.exports = CustomOrderView;

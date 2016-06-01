import React from 'react'
import MenuFormContainer from '../MenuFormContainer/MenuFormContainer'
import OrderTotal from '../OrderTotal/OrderTotal'
import AddItemNotification from '../AddItemNotification/AddItemNotification'
import { Link } from 'react-router'
import sass from '../../App/app.scss'
import sass2 from './custom-order-view.scss'

var CustomOrderView = React.createClass({

    render: function() {
        return (

            <div>
                <div className="title-cover">
                    <h1>Place Your Order</h1>
                    <div className="userProgress">
                        <div id="twoOfFive"></div>
                    </div>
                </div>

                <div className="main-wrap">
                    <AddItemNotification
                    notification={this.props.notification} />

                    <MenuFormContainer
                        data={this.props.data}
                        handleSpecialInstructions={this.props.handleSpecialInstructions}
                        handleAddItemToOrder={this.props.handleAddItemToOrder}
                        toggleAddNotification={this.props.toggleAddNotification} />
                     <OrderTotal
                         orderItems={this.props.items}
                         handleDeleteItemFromOrder={this.props.handleDeleteItemFromOrder}
                         toggleDeleteNotification={this.props.toggleDeleteNotification} />
                     <div className="next-button-container">
                     <Link to="/additional-info"><button className="next-button">Next</button></Link>
                     </div>
                 </div>
             </div>
        )
    }
});

module.exports = CustomOrderView;

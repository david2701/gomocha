import React from 'react'
import MenuFormContainer from '../MenuFormContainer/MenuFormContainer'
import OrderTotal from '../OrderTotal/OrderTotal'
import AddItemNotification from '../AddItemNotification/AddItemNotification'
import SpecialInstructions from '../SpecialInstructions/SpecialInstructions'
import Footer from '../../DashboardView/Footer/Footer'
import { Link } from 'react-router'
import sass from '../../App/app.scss'
import sass2 from './custom-order-view.scss'

var CustomOrderView = React.createClass({

    propTypes: {
        notification: React.PropTypes.shape({
            add: React.PropTypes.bool,
            delete: React.PropTypes.bool,
            error: React.PropTypes.bool
        }),
        data: React.PropTypes.object,
        items: React.PropTypes.array,
        handleSpecialInstructions: React.PropTypes.func,
        handleAddItemToOrder: React.PropTypes.func,
        handleDeleteItemFromOrder: React.PropTypes.func,
        toggleAddNotification: React.PropTypes.func,
        toggleDeleteNotification: React.PropTypes.func,
        toggleErrorNotification: React.PropTypes.func
    },

    render: function() {
        return (
            <div className="custom-order-container">
                <div className="title-cover">
                    <h1>Place Your Order</h1>
                    <div className="userProgress">
                        <div id="twoOfFive"></div>
                    </div>
                </div>

                <div className="custom-order-view-wrap">
                    <AddItemNotification
                    notification={this.props.notification} />
                    <div className="menu-form-container">

                            <MenuFormContainer
                                data={this.props.data}
                                handleSpecialInstructions={this.props.handleSpecialInstructions}
                                handleAddItemToOrder={this.props.handleAddItemToOrder}
                                toggleAddNotification={this.props.toggleAddNotification}
                                toggleErrorNotification={this.props.toggleErrorNotification} />

                    </div>
                    <div className="order-total-container">
                         <OrderTotal
                             orderItems={this.props.items}
                             handleDeleteItemFromOrder={this.props.handleDeleteItemFromOrder}
                             toggleDeleteNotification={this.props.toggleDeleteNotification} />
                             <SpecialInstructions
                                handleSpecialInstructions={this.props.handleSpecialInstructions} />
                            <Link to="/additional-info">
                                <button className="next-button">
                                    Next
                                    <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
                                </button>
                            </Link>
                    </div>
                 </div>
                 <Footer />
             </div>
        )
    }
});

module.exports = CustomOrderView;

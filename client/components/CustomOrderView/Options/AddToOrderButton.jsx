import React from 'react'
import _ from 'lodash'
import sass from './options.scss'

var AddToOrderButton = React.createClass({

    render: function() {
        var itemDetails = _.assign({itemName: this.props.itemName, price: this.props.price}, this.props.itemDetails);

        return(
            <div className="add-to-order-wrap">
                <div className='add-to-order'
                     onClick={() => {
                         this.props.handleAddItemToOrder(itemDetails)
                         this.props.toggleAddNotification()
                     }}>
                    <span title='Add item to order'><i className="fa fa-plus-circle add-item-icon fa-lg"></i></span>
                </div>
                <div className="add-to-order-helper">
                    Click to add item to order!
                </div>
                <div className="add-to-order-arrow"></div>
            </div>
        )
    }
});

module.exports = AddToOrderButton;

import React from 'react'
import _ from 'lodash'
import sass from './options.scss'

var AddToOrderButton = React.createClass({

    propTypes: {
        handleAddItemToOrder: React.PropTypes.func,
        handleItemFormComplete: React.PropTypes.func,
        toggleAddNotification: React.PropTypes.func,
        itemName: React.PropTypes.string,
        price: React.PropTypes.number,
        itemDetails: React.PropTypes.shape({
            milkType: React.PropTypes.string,
            quantity: React.PropTypes.string,
            size: React.PropTypes.string,
            itemName: React.PropTypes.string,
            price: React.PropTypes.number
        })
    },

    render: function() {
        var itemDetails = _.assign({itemName: this.props.itemName, price: this.props.price}, this.props.itemDetails);

        return(
            <div className="add-to-order-wrap">
                <div className='add-to-order'
                     onClick={() => {
                         this.props.handleAddItemToOrder(itemDetails)
                         this.props.toggleAddNotification()
                     }}>
                    Click to add
                </div>
            </div>
        )
    }
});

module.exports = AddToOrderButton;

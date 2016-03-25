import React from 'react'
import _ from 'lodash'

var AddToOrderButton = React.createClass({

    render: function() {
        var itemDetails = _.assign({itemName: this.props.itemName, price: this.props.price}, this.props.itemDetails);

        return(
            <div className='add-to-order'
                 onClick={() =>
                     this.props.handleAddItemToOrder(itemDetails)
                 }>
                Add to order
            </div>
        )
    }
});

module.exports = AddToOrderButton;

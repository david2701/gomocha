import React from 'react'
import _ from 'lodash'
import sass from './options.scss'

var AddToOrderButton = React.createClass({

    render: function() {
        var itemDetails = _.assign({itemName: this.props.itemName, price: this.props.price}, this.props.itemDetails);

        return(
            <div className='add-to-order'
                 onClick={() => {
                     this.props.handleAddItemToOrder(itemDetails)
                 }}>
                <span title='Add item to order'><i className="fa fa-plus-circle add-item-icon fa-lg"></i></span>
            </div>
        )
    }
});

module.exports = AddToOrderButton;

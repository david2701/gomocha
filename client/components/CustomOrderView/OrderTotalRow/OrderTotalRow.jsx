import React from 'react'
import sass from './order-total-row.scss'

var OrderTotalRow = React.createClass({

    _handleDeleteItem: function() {
        this.props.handleDeleteItemFromOrder(this.props.index)
    },

    render: function() {
        return (
            <tr className='order-total-row'>
                <td>{this.props.itemDetails.quantity}
                    <span> - </span>
                    {this.props.itemDetails.size}
                    <span> </span>
                    {this.props.itemDetails.itemName}
                </td>
                <td className='td-price'>
                    ${this.props.itemDetails.price.toFixed(2)}
                    <span title='Delete item from order'
                        onClick={this._handleDeleteItem} >
                        <i className="fa fa-trash delete-item hide"></i>
                    </span>
                </td>
            </tr>
        )
    }
});

module.exports = OrderTotalRow;

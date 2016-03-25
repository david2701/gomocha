import React from 'react'
import sass from './order-total-row.scss'

var OrderTotalRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.itemDetails.quantity}
                    <span> - </span>
                    {this.props.itemDetails.size}
                    <span> </span>
                    {this.props.itemDetails.itemName}
                </td>
                <td>${this.props.itemDetails.price.toFixed(2)}</td>
            </tr>
        )
    }
});

module.exports = OrderTotalRow;

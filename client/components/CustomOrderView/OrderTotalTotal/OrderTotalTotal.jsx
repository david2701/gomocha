import React from 'react'
import sass from './order-total-total.scss'

var OrderTotalTotal = React.createClass({

    propTypes: {
        orderTotal: React.PropTypes.node,
        orderItems: React.PropTypes.array
    },

    render: function() {
        return (
                <tr>
                    <td className="order-total-total">Total</td>
                    <td>${this.props.orderTotal}</td>
                </tr>
        )
    }
});

module.exports = OrderTotalTotal;

import React from 'react'

var OrderTax = React.createClass({

    propTypes: {
        orderTax: React.PropTypes.number
    },

    render: function() {
        return (
                <tr className="order-total-tax">
                    <td>Tax</td>
                    <td>${this.props.orderTax.toFixed(2)}</td>
                </tr>
        )
    }
});

module.exports = OrderTax

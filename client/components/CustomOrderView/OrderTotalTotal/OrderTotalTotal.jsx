import React from 'react'

var OrderTotalTotal = React.createClass({

    propTypes: {
        orderTotal: React.PropTypes.number,
        orderItems: React.PropTypes.array
    },

    render: function() {
        return (
                <tr>
                    <td>Total</td>
                    <td>${this.props.orderTotal}</td>
                </tr>
        )
    }
});

module.exports = OrderTotalTotal;

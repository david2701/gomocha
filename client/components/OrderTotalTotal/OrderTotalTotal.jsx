import React from 'react'

var OrderTotalTotal = React.createClass({
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

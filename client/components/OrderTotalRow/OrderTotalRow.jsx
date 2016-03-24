import React from 'react'

var OrderTotalRow = React.createClass({
    render: function() {

        // var quantity = this.props.data.shops[0].menu

        return (
            <tr>
                <td>1 - 16oz. Frappe</td>
                <td>$3.95</td>
            </tr>
        )
    }
});

module.exports = OrderTotalRow;

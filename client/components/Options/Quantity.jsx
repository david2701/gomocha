import React from 'react'

var Quantity = React.createClass({
    render: function() {
        return (
            <select name="quantity">
                <option value="" disabled selected>Qty</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        )
    }
});

module.exports = Quantity;

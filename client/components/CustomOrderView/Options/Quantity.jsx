import React from 'react'
import sass from './options.scss'

var Quantity = React.createClass({

    propTypes: {
        handleChange: React.PropTypes.func,
        key: React.PropTypes.string,
        value: React.PropTypes.string
    },
    
    render: function() {
        return (
            <select value={this.props.value} name="quantity" className="quantity-select" onChange={
                    (e) => {
                        this.props.handleChange(e)
                    }}>
                <option value="default" disabled>Qty</option>
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

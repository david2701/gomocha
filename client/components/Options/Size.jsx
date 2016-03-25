import React from 'react'

var Size = React.createClass({
    render: function() {
        return (
            <select name="size" onChange={this.props.handleChange}>
                <option value="" disabled selected>Size</option>
                <option value="12 oz.">12 oz.</option>
                <option value="16 oz.">16 oz.</option>
                <option value="20 oz.">20 oz.</option>
            </select>
        )
    }
});

module.exports = Size;

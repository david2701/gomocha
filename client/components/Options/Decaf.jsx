import React from 'react'

var Decaf = React.createClass({
    render: function() {
        return (
            <div className="decaf-option">
                <label>
                Decaf?
                <input className="decaf-input" type="checkbox" value="decaf" onChange={this.props.handleChange} />
                </label><br />
            </div>
        )
    }
});

module.exports = Decaf;

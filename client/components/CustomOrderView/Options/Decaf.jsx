import React from 'react'
import sass from './options.scss'

var Decaf = React.createClass({
    render: function() {
        return (
            <div className="decaf-option">
                <label>
                Decaf?
                <input className="decaf-input" type="checkbox" checked={this.props.value} onChange={this.props.handleChange} />
                </label><br />
            </div>
        )
    }
});

module.exports = Decaf;

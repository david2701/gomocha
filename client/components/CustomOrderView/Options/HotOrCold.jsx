import React from 'react'
import sass from './options.scss'

var HotOrCold = React.createClass({

    propTypes: {
        handleChange: React.PropTypes.func,
        key: React.PropTypes.string,
        value: React.PropTypes.node
    },

    render: function() {
        return (
            <div className="hot-or-cold-option">
                <label>
                    Hot
                <input className="hot-input" type="radio" name="hot-or-cold" value="hot"
                    checked={this.props.value === 'hot'} onChange={this.props.handleChange} />
                </label>
                <label>
                    Cold
                <input className="cold-input" type="radio" name="hot-or-cold" value="cold"
                    checked={this.props.value === 'cold'} onChange={this.props.handleChange} />
                </label>
            </div>
        )
    }
});

module.exports = HotOrCold;

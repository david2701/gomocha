import React from 'react'

var HotOrCold = React.createClass({
    render: function() {
        return (
            <div className="hot-or-cold-option">
                <label>
                    Hot
                <input className="hot-input" type="radio" name="hot-or-cold" value="hot" onChange={this.props.handleChange} />
                </label>
                <label>
                    Cold
                <input className="cold-input" type="radio" name="hot-or-cold" value="cold" onChange={this.props.handleChange} />
                </label>
            </div>
        )
    }
});

module.exports = HotOrCold;

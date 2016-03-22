import React from 'react'

var HotOrCold = React.createClass({
    render: function() {
        return (
            <div className="hot-or-cold-option">
                <label>
                    Hot
                <input className="hot-input" type="radio" name="hot-or-cold" value="hot" />
                </label>
                <label>
                    Cold
                <input className="cold-input" type="radio" name="hot-or-cold" value="cold" />
                </label>
            </div>
        )
    }
});

module.exports = HotOrCold;

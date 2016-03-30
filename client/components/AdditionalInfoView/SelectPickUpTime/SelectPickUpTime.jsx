import React from 'react'
import sass from './select-pick-up-time.scss'

var SelectPickUpTime = React.createClass({
    render: function() {
        return (
            <div className="select-pick-up-container">
                <h2>Pick up now or schedule pick up?</h2>
            <div className="select-pick-up-now">
                    <label>Now: <input type="checkbox" /></label>
                </div>
                <div className="select-pick-up-time">
                    <label>Pick up at: <input type="time" /></label>
                </div>
            </div>
        )
    }
});

module.exports = SelectPickUpTime;

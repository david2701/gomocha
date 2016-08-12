import React from 'react'
import sass from './select-pick-up-time.scss'
import moment from 'moment'

var SelectPickUpTime = React.createClass({

    propTypes: {
        handlePickupTime: React.PropTypes.func,
        value: React.PropTypes.string
    },

    render: function() {
        return (
            <div className="select-pick-up-container">
                <h2>Pick up now or schedule pick up?</h2>
            <div className="select-pick-up-now">
                    <label>Now: <input
                                    onChange={() => this.props.handlePickupTime('true')}
                                    type="radio"
                                    checked={this.props.value === 'true'} />
                    </label>
                </div>
                <div className="select-pick-up-time">
                    <label>Pick up at:<span>  </span>
                        <select
                            onChange={(event) => this.props.handlePickupTime(event.target.value)}
                            name="pickup-time"
                            value={this.props.value} >
                            <option value="true" disabled>Time</option>
                            <option value="5:00am">5:00am</option>
                            <option value="5:30am">5:30am</option>
                            <option value="6:00am">6:00am</option>
                            <option value="6:30am">6:30am</option>
                            <option value="7:00am">7:00am</option>
                            <option value="7:30am">7:30am</option>
                            <option value="8:00am">8:00am</option>
                            <option value="8:30am">8:30am</option>
                            <option value="9:00am">9:00am</option>
                            <option value="9:30am">9:30am</option>
                            <option value="10:00am">10:00am</option>
                            <option value="10:30am">10:30am</option>
                            <option value="11:00am">11:00am</option>
                            <option value="11:30am">11:30am</option>
                            <option value="12:00pm">12:00pm</option>
                            <option value="12:30pm">12:30pm</option>
                            <option value="1:00pm">1:00pm</option>
                            <option value="1:30pm">1:30pm</option>
                            <option value="2:00pm">2:00pm</option>
                            <option value="2:30pm">2:30pm</option>
                            <option value="3:00pm">3:00pm</option>
                            <option value="3:30pm">3:30pm</option>
                            <option value="4:00pm">4:00pm</option>
                            <option value="4:30pm">4:30pm</option>
                            <option value="5:00pm">5:00pm</option>
                            <option value="5:30pm">5:30pm</option>
                            <option value="6:00pm">6:00pm</option>
                            <option value="6:30pm">6:30pm</option>
                            <option value="7:00pm">7:00pm</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = SelectPickUpTime;

import React from 'react'
import sass from './select-method-of-trans.scss'

var SelectMethodOfTrans = React.createClass({
    render: function() {
        return (
            <div className="method-of-trans-container">
                <h2>Select Method of Transportation</h2>
                <label className="method-of-trans" htmlFor="walking">
                    <input
                        onChange={this.props.handleMethodOfTrans}
                        type="radio"
                        name="methodOfTrans"
                        className="method-of-trans-input"
                        value="walking" /> Walking
                </label>
                <label className="method-of-trans" htmlFor="biking">
                    <input
                        onChange={this.props.handleMethodOfTrans}
                        type="radio"
                        name="methodOfTrans"
                        className="method-of-trans-input"
                        value="biking" /> Biking
                </label>
                <label className="method-of-trans" htmlFor="driving">
                    <input
                        onChange={this.props.handleMethodOfTrans}
                        type="radio"
                        name="methodOfTrans"
                        className="method-of-trans-input"
                        value="driving" /> Driving
                </label>
            </div>
        )
    }
});

module.exports = SelectMethodOfTrans;

import React from 'react'
import sass from './select-method-of-trans.scss'

var SelectMethodOfTrans = React.createClass({
    render: function() {
        return (
            <div className="method-of-trans-container">
                <h2>Select Method of Transportation</h2>

                        <input
                            onChange={this.props.handleMethodOfTrans}
                            type="radio"
                            name="methodOfTrans"
                            className="method-of-trans-input"
                            id="walking"
                            value="walking" />
                        <label className="method-of-trans-label" htmlFor="walking"><i className="fa fa-male fa-3x" aria-hidden="true"></i>Walking</label>

                        <input
                            onChange={this.props.handleMethodOfTrans}
                            type="radio"
                            name="methodOfTrans"
                            className="method-of-trans-input"
                            id="biking"
                            value="biking" />
                        <label className="method-of-trans-label" htmlFor="biking"><i className="fa fa-bicycle fa-3x" aria-hidden="true"></i>Biking</label>

                        <input
                            onChange={this.props.handleMethodOfTrans}
                            type="radio"
                            name="methodOfTrans"
                            className="method-of-trans-input"
                            id="driving"
                            value="driving" />
                        <label className="method-of-trans-label" htmlFor="driving"><i className="fa fa-car fa-3x" aria-hidden="true"></i>Driving</label>

            </div>
        )
    }
});

module.exports = SelectMethodOfTrans;

import React from 'react'
import sass from './select-method-of-trans.scss'

var SelectMethodOfTrans = React.createClass({
    render: function() {
        return (
            <div className="method-of-trans-container">
                <h2>Select Method of Transportation</h2>
            <div className="method-of-trans"><p>Walking</p></div>
        <div className="method-of-trans"><p>Biking</p></div>
    <div className="method-of-trans"><p>Driving</p></div>
            </div>
        )
    }
});

module.exports = SelectMethodOfTrans;

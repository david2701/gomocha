import React from 'react'
import sass from './order-ready-time.scss'

var OrderReadyTime = React.createClass({
    render: function() {

        var methodOfTransIcon;
        switch(this.props.methodOfTrans) {
        case 'walking':
            methodOfTransIcon = <div className="method-of-trans-icon"><i className="fa fa-male fa-3x" aria-hidden="true"></i></div>;
            break;
        case 'biking':
            methodOfTransIcon = <div className="method-of-trans-icon"><i className="fa fa-bicycle fa-3x" aria-hidden="true"></i></div>;
            break;
        case 'driving':
            methodOfTransIcon = <div className="method-of-trans-icon"><i className="fa fa-car fa-3x" aria-hidden="true"></i></div>;
            break;
        default:
            methodOfTransIcon = <div className="method-of-trans-icon">No user input :(</div>

        }

        return (
            <div className="order-ready-time-container">
                <h2>Your order will be ready in...</h2>
                <div className="order-ready-time">17 min</div>
                <p>by</p>
            {methodOfTransIcon}
            <div className="order-ready-time-divider"></div>
            </div>
        )
    }
});

module.exports = OrderReadyTime;

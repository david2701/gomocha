import React from 'react'
import sass from './order-ready-time.scss'

var OrderReadyTime = React.createClass({

    propTypes: {
        methodOfTrans: React.PropTypes.string,
        pickupTime: React.PropTypes.string,
        duration: React.PropTypes.string
    },

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

        var pickupTime;
        if (this.props.pickupTime === 'true') {
            pickupTime = <div className="order-ready-time-container">
                <h2>Your order will be ready in...</h2>
            <div className="order-ready-time">{this.props.duration}</div>
                <p>by</p>
            {methodOfTransIcon}
            <div className="order-ready-time-divider"></div>
            </div>
        } else {
            pickupTime = <div className="order-ready-time-container">
                <h2>Your order will be ready at {this.props.pickupTime}</h2>
            <div className="order-ready-time-divider"></div>
            </div>
        }


        return (
            <div>
                {pickupTime}
            </div>
        )
    }
});

module.exports = OrderReadyTime;

import React from 'react'
import sass from './orders-container.scss'
import BAOrder from '../BAOrder/BAOrder'

var OrdersContainer = React.createClass({
    render: function(){
        return (
            <div className="ba-orders-container">
                <BAOrder />
                <BAOrder />
                <BAOrder />
                <BAOrder />
                <BAOrder />
            </div>
        )
    }
});

module.exports = OrdersContainer;

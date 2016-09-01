import React from 'react'
import sass from './previous-order.scss'
import PreviousOrderItem from '../PreviousOrderItem/PreviousOrderItem'

var PreviousOrder = React.createClass({

    propTypes: {
        previousOrder: React.PropTypes.array
    },

    render: function() {

        var previousOrderItems = this.props.previousOrder.items.map(function(item, index) {
            return <PreviousOrderItem
                        previousOrderItem={item}
                        key={index} />
        })

        return (
            <div className="prev-orders">
                <h2>
                {this.props.previousOrder.selectedShop}
                </h2>
                <div>{previousOrderItems}</div>
                <p>Special instructions: {this.props.previousOrder.specialInstructions}</p>
            </div>
        )
    }
})

module.exports = PreviousOrder;

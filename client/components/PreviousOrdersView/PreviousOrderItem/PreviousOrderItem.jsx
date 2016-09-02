import React from 'react'
import sass from './previous-order-item.scss'

var PreviousOrderItem = React.createClass({

    propTypes: {
        previousOrderItem: React.PropTypes.array
    },

    render: function() {

        var item = this.props.previousOrderItem;

        return (
            <div className="prev-orders-item">
                <div className="prev-orders-item-top">
                    <div className="prev-orders-item-prop">
                        {item.quantity} -
                    </div>
                    {item.size ?
                        <div className="prev-orders-item-prop">
                            {item.size}
                        </div>
                    : ''}
                    <div className="prev-orders-item-prop">
                        {item.itemName}
                    </div>
                </div>
                <div className="prev-orders-item-bottom">
                    {item.milkType ?
                        <div className="prev-orders-item-prop">
                            {item.milkType}
                        </div>
                    : ''}
                    {item.decaf ?
                        <div className="prev-orders-item-prop">
                            decaf
                        </div>
                    : ''}
                    {item.hotOrCold ?
                        <div className="prev-orders-item-prop">
                            {item.hotOrCold}
                        </div>
                    : ''}
                </div>
            </div>
        )
    }
})

module.exports = PreviousOrderItem;

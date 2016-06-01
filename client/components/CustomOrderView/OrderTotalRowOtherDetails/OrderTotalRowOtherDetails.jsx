import React from 'react'
import sass from './order-total-row-other-details.scss'

var OrderTotalRowOtherDetails = React.createClass({

    _handleDeleteItem: function() {
        this.props.handleDeleteItemFromOrder(this.props.index)
    },

    render: function() {

        var milkType = this.props.itemDetails.milkType;
        var decaf = this.props.itemDetails.decaf;
        var hotOrCold = this.props.itemDetails.hotOrCold;

        return (
            <div>
                <tr className='order-total-row'>
                    <td>
                        <span> - </span>

                        <span> </span>

                    </td>
                    <td className='td-price'>

                    </td>
                </tr>
                <tr>
                    <td>

                    </td>
                </tr>
            </div>
        )
    }
});

module.exports = OrderTotalRowOtherDetails;

import React from 'react'
import sass from './order-total-row.scss'

var OrderTotalRow = React.createClass({

    _handleDeleteItem: function() {
        this.props.handleDeleteItemFromOrder(this.props.index)
    },

    render: function() {
        return (
            <tr className='order-total-row'>
                <td>1
                    <span> - </span>
                    16 oz.
                    <span> </span>
                    Cappucino
                </td>
                <td className='td-price'>
                    $2.95
                    <span title='Delete item from order'>
                        <i className="fa fa-trash delete-item hide"></i>
                    </span>
                </td>
            </tr>
        )
    }
});

module.exports = OrderTotalRow;

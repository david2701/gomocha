import React from 'react'
import OrderTotalRow from '../OrderTotalRow/OrderTotalRow'

// after user clicks add to order button -> notification confirms -- callback
// after user clicks add to order button -> quantity, size, drink name, and price are sent to table row component -- state callback
// order total is calculated with each add to order click by summing all component prices -- state callback
// onChange, plus button appears to add item to order -- callback



// tax is included in order total calculation
// after adding item to order, another button appears to add similar menu item with different option choices
// after user clicks add item button -> identical menu item is created in its default state



// Question: {} means JS within anything React/JSX?
// Question: `key` property is a requirement only on React components that are generated using .map?

var OrderTotal = React.createClass({
    render: function() {
        return (
            <div>
                <section id="order-total">
                    <h2>Order Total</h2>
                    <table className="order-total-table">
                    <tbody>
                        <OrderTotalRow
                            orderItems={this.props.orderItems} />
                        <tr>
                            <td>Tax</td>
                            <td>$2.00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>$12.85</td>
                        </tr>
                    </tbody>
                    </table>
                </section>
                <input className="next-button" type="submit" value="Next" />
            </div>
        )
    }
});

module.exports = OrderTotal;

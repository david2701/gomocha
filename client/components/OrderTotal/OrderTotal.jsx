import React from 'react'
import OrderTotalRow from '../OrderTotalRow/OrderTotalRow'
import OrderTax from '../OrderTax/OrderTax'
import OrderTotalTotal from '../OrderTotalTotal/OrderTotalTotal'

// after user clicks add to order button -> notification confirms -- callback
// DONE after user clicks add to order button -> quantity, size, drink name, and price are sent to table row component -- state callback
// order total is calculated with each add to order click by summing all component prices -- state callback
// onChange, plus button appears to add item to order -- callback



// tax is included in order total calculation
// after adding item to order, another button appears to add similar menu item with different option choices
// after user clicks add item button -> identical menu item is created in its default state
// user cannot add item unless all form elements are filled out


// Question: {} means JS within anything React/JSX?
// Question: `key` property is a requirement only on React components that are generated using .map?

var OrderTotal = React.createClass({
    render: function() {

        var orderItems = this.props.orderItems.map(
            (item, index) => {
                return <OrderTotalRow
                itemDetails={item}
                key={index} />
            }
        );

        var total = this.props.orderItems.reduce((sum, current) =>
            sum + current.price, 0);
        var orderTax = (total * 0.1);
        var orderTotal = (total + orderTax).toFixed(2);

        return (
            <div>
                <section id="order-total">
                    <h2>Order Total</h2>
                    <table className="order-total-table">
                        <tbody>
                            {orderItems}
                            <OrderTax orderTax={orderTax} />
                            <OrderTotalTotal
                                orderTotal={orderTotal}
                                orderItems={this.props.orderItems} />
                        </tbody>
                    </table>
                </section>
                <input className="next-button" type="submit" value="Next" />
            </div>
        )
    }
});

module.exports = OrderTotal;

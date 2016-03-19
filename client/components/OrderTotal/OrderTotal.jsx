import React from 'react'

var OrderTotal = React.createClass({
    render: function() {
        return (
            <div>
                <section id="order-total">
                    <h2>Order Total</h2>
                    <table className="order-total-table">
                    <tbody>
                        <tr>
                            <td>1 - 16oz. Frappe</td>
                            <td>$3.95</td>
                        </tr>
                        <tr>
                            <td>1 - 12oz. Green Tea</td>
                            <td>$2.95</td>
                        </tr>
                        <tr>
                            <td>2 - Blueberry Scone</td>
                            <td>$3.95</td>
                        </tr>
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

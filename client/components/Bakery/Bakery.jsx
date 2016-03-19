import React from 'react'

var BakeryItem = React.createClass({
    render: function() {
        return (
            <div className="drink-item">
                <label htmlFor="bakery">{this.props.name}</label><br />
                <select name="quantity" defaultValue="Qty">
                    <option value="Qty" disabled>Qty</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        )
    }
})

var Bakery = React.createClass({
    render: function() {
        var bakeryItems = this.props.items.map(
            function(arrayItem, index) {
                return <BakeryItem
                    name={arrayItem.name}
                    key={index} />
            }, this);

        return (
            <section id="bakery">
                <h2>Bakery</h2>
                {bakeryItems}
                <div className="divider"></div>
            </section>
        )
    }
})

module.exports = Bakery;

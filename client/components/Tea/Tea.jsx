import React from 'react'

var TeaItem = React.createClass({
    render: function() {
        return (
            <div className="drink-item">
                <label htmlFor="tea">{this.props.drinkName}</label><br />
                <select name="size" defaultValue="Size">
                    <option value="Size" disabled>Size</option>
                    <option value="12oz">12 oz.</option>
                    <option value="16oz">16 oz.</option>
                    <option value="20oz">20 oz.</option>
                </select>
                <select name="quantity">
                    <option value="" disabled selected>Qty</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        )
    }
});

var Tea = React.createClass({
    render: function() {
        var teaItems = this.props.drinks.map(
            function(arrayItem, index) {
                return <TeaItem
                    drinkName={arrayItem.name}
                    key={index} />
            }, this);

        return (
            <section id="tea">
                <h2>Tea</h2>
                {teaItems}
                <div className="divider"></div>
            </section>
        )
    }

});

module.exports = Tea;

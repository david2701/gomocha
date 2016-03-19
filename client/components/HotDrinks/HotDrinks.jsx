import React from 'react'

var HotDrinkItem = React.createClass({
    render: function() {
        return (
            <div className="drink-item">
                <label htmlFor="hot-drink">{this.props.drinkName}</label><br />
                <select name="milk-type" defaultValue="Milk Type">
                    <option value="Milk Type" disabled>Milk Type</option>
                    <option value="almond-milk">Almond Milk</option>
                    <option value="soy-milk">Soy Milk</option>
                    <option value="rice-milk">Rice Milk</option>
                    <option value="whole-milk">Whole Milk</option>
                    <option value="non-fat-milk">Non-Fat Milk</option>
                </select>
                <select name="size">
                    <option value="" disabled selected>Size</option>
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

var HotDrinks = React.createClass({
    render: function() {
        var drinkItems = this.props.drinks.map(
            function(arrayItem, index) {
                return <HotDrinkItem
                    drinkName={arrayItem.name}
                    key={index} />
            }, this);

        return (
            <section id="hot-drinks">
                <h2>Hot Drinks</h2>
                {drinkItems}
                <div className="divider"></div>
            </section>
        )
    }
});



module.exports = HotDrinks;

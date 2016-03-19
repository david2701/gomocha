import React from 'react'
import NavAndTitle from '../NavAndTitle/NavAndTitle'
import HotDrinks from '../HotDrinks/HotDrinks'
import ColdDrinks from '../ColdDrinks/ColdDrinks'
import Tea from '../Tea/Tea'
import Bakery from '../Bakery/Bakery'
import SpecialInstructions from '../SpecialInstructions/SpecialInstructions'
import OrderTotal from '../OrderTotal/OrderTotal'

var HOTDRINKS = [
    {name: "Latte"},
    {name: "Americano"},
    {name: "Cappucino"},
    {name: "Espresso"},
    {name: "Macchiato"}
];

var COLDDRINKS = [
    {name: "Iced Latte"},
    {name: "Iced Mocha"},
    {name: "Iced Chai"},
    {name: "Iced Coffee"},
    {name: "Frappe"}
];

var TEA = [
    {name: "Green"},
    {name: "Jasmine Green"},
    {name: "Chai"},
    {name: "Mint"},
    {name: "Chamomile"}
];

var BAKERY = [
    {name: "Croissant"},
    {name: "Banana Muffin"},
    {name: "Blueberry Scone"},
    {name: "Carrot Cake"},
    {name: "Home-Made Cookies"}
];

var App = React.createClass({
    render: function() {
        return (
            <div>
                <NavAndTitle />
                <form>
                <HotDrinks drinks={HOTDRINKS}/>
                <ColdDrinks drinks={COLDDRINKS} />
                <Tea drinks={TEA} />
                <Bakery items={BAKERY} />
                <SpecialInstructions />
                <OrderTotal />
                </form>
            </div>
        )
    }
});



module.exports = App;

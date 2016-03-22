import React from 'react'
import MilkType from '../Options/MilkType'
import Size from '../Options/Size'
import Quantity from '../Options/Quantity'
import Decaf from '../Options/Decaf'
import HotOrCold from '../Options/HotOrCold'
import _ from 'lodash'

var HotDrinkItem = React.createClass({

    _renderOption(option) {
        switch (option) {
            case 'milk-type':
                return <MilkType />
            case 'size':
                return <Size />
            case 'quantity':
                return <Quantity />
            case 'decaf':
                return <Decaf />
        }
    },

    _renderOption2(option) {
        switch (option) {
            case 'decaf':
                return <Decaf />
            case 'hot-or-cold':
                return <HotOrCold />
        }
    },
    //
    // getInitialState: function() {
    //     return {
    //         options: this.props.data.shops[0].menu[0].items.options
    //     }
    // },

    render: function() {

        // var options = this.props.data.shops[0].menu.map()

        return (
            <div className="drink-item">
                <label htmlFor="hot-drink">{this.props.drinkName}</label><br />

                <div className="item-top-row">
                    {this.props.options.map(this._renderOption)}

                    <div className="item-price">
                        ${this.props.price.toFixed(2)}
                    </div>
                </div>

                {this.props.options.map(this._renderOption2)}

            </div>
        )
    }
});

// DONE create options array on each menu item
// DONE change id property on each menu item
// DONE complete all Options components
// pull together all section components to one flexible component

// iterate over menu to create MenuSection component

// create OrderTotal component using callbacks


var MenuSection = React.createClass({

    render: function() {

        var menuSection = _.find(this.props.data.shops[0].menu, {"slug": this.props.slug});

        var sectionTitle = menuSection.display;

        var drinkItems = menuSection.items.map(
            (item, index) => {
                return <HotDrinkItem
                    drinkName={item.name}
                    price={item.price}
                    options={item.options}
                    key={item.id} />
            });

        // var drinkItems = this.props.data.shops[0].menu.map(
        //     (menuSection, index) => {
        //
        //         if (menuSection.slug === this.props.slug) {
        //             sectionTitle = menuSection.displayName;
        //             return menuSection.items.map(
        //                 (item, index) => {
        //                     return <HotDrinkItem
        //                         drinkName={item.name}
        //                         price={item.price}
        //                         options={item.options}
        //                         key={item.id} />
        //             })
        //         }
        //     });

        return (
            <section id="hot-drinks">
                <h2>{sectionTitle}</h2>
                    {drinkItems}
                <div className="divider"></div>
            </section>
        )
    }
});

// {this.props.data.shops[0].menu.map(
//     function(menuSection) {
//         if (menuSection.slug === this.props.slug) {
//             return menuSection.displayName
//         }
//     }
// )}


module.exports = MenuSection;

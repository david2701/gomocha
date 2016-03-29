import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import _ from 'lodash'
import sass from './menu-section.scss'

var MenuSection = React.createClass({

    render: function() {
        var menuSection = _.find(this.props.data.shops[0].menu, {"slug": this.props.slug});
        var sectionTitle = menuSection.displayName;
        var menuItems = menuSection.items.map(
            (item, index) => {
                return <MenuItem
                    itemName={item.name}
                    price={item.price}
                    options={item.options}
                    key={item.id}
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    calculateTotalAndTax={this.props.calculateTotalAndTax} />
            });

        return (
            <section id="hot-drinks">
                <h2>{sectionTitle}</h2>
                    {menuItems}
                <div className="divider"></div>
            </section>
        )
    }
});


module.exports = MenuSection;

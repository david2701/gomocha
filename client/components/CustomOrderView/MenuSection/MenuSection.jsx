import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import _ from 'lodash'
import sass from './menu-section.scss'

var MenuSection = React.createClass({

    propTypes: {
        data: React.PropTypes.object,
        slug: React.PropTypes.string,
        handleAddItemToOrder: React.PropTypes.func,
        calculateTotalAndTax: React.PropTypes.func,
        toggleAddNotification: React.PropTypes.func
    },

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
                    calculateTotalAndTax={this.props.calculateTotalAndTax}
                    toggleAddNotification={this.props.toggleAddNotification} />
            });

        return (
            <section className="menu-section">
                <h2>{sectionTitle}</h2>
                    {menuItems}
                <div className="divider"></div>
            </section>
        )
    }
});


module.exports = MenuSection;

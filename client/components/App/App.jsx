import React from 'react'
import NavAndTitle from '../NavAndTitle/NavAndTitle'
import MenuSection from '../HotDrinks/MenuSection'
import SpecialInstructions from '../SpecialInstructions/SpecialInstructions'
import OrderTotal from '../OrderTotal/OrderTotal'



var App = React.createClass({

    render: function() {
        return (
            <div>
                <NavAndTitle />
                <form>
                <MenuSection
                    data={this.props.data}
                    slug="hot-drinks" />
                <MenuSection
                    data={this.props.data}
                    slug="cold-drinks" />
                <MenuSection
                    data={this.props.data}
                    slug="tea" />
                <MenuSection
                    data={this.props.data}
                    slug="bakery" />
                <SpecialInstructions />
                <OrderTotal />
                </form>
            </div>
        )
    }
});


module.exports = App;

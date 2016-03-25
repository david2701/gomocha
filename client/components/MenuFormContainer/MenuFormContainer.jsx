import React from 'react'
import MenuSection from '../MenuSection/MenuSection'
import SpecialInstructions from '../SpecialInstructions/SpecialInstructions'

var MenuFormContainer = React.createClass({


    render: function() {
        return (
            <form>
                <MenuSection
                    data={this.props.data}
                    slug="hot-drinks"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}/>
                <MenuSection
                    data={this.props.data}
                    slug="cold-drinks"
                    handleAddItemToOrder={this.props.handleAddItemToOrder} />
                <MenuSection
                    data={this.props.data}
                    slug="tea"
                    handleAddItemToOrder={this.props.handleAddItemToOrder} />
                <MenuSection
                    data={this.props.data}
                    slug="bakery"
                    handleAddItemToOrder={this.props.handleAddItemToOrder} />
                <SpecialInstructions />
            </form>
        )
    }
});

module.exports = MenuFormContainer;

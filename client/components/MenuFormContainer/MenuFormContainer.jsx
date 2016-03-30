import React from 'react'
import MenuSection from '../MenuSection/MenuSection'
import SpecialInstructions from '../SpecialInstructions/SpecialInstructions'
import sass from './menu-form-container.scss'

var MenuFormContainer = React.createClass({


    render: function() {
        return (
            <form>
                <MenuSection
                    data={this.props.data}
                    slug="hot-drinks"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleNotification={this.props.toggleNotification} />
                <MenuSection
                    data={this.props.data}
                    slug="cold-drinks"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleNotification={this.props.toggleNotification} />
                <MenuSection
                    data={this.props.data}
                    slug="tea"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleNotification={this.props.toggleNotification} />
                <MenuSection
                    data={this.props.data}
                    slug="bakery"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleNotification={this.props.toggleNotification} />
                <SpecialInstructions />
            </form>
        )
    }
});

module.exports = MenuFormContainer;

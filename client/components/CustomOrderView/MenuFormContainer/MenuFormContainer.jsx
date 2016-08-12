import React from 'react'
import MenuSection from '../MenuSection/MenuSection'
import SpecialInstructions from '../SpecialInstructions/SpecialInstructions'
import sass from './menu-form-container.scss'

var MenuFormContainer = React.createClass({

    propTypes: {
        data: React.PropTypes.object,
        handleAddItemToOrder: React.PropTypes.func,
        toggleNotification: React.PropTypes.func,
        handleSpecialInstructions: React.PropTypes.func
    },

    render: function() {
        return (
            <form>
                <MenuSection
                    data={this.props.data}
                    slug="hot-drinks"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleAddNotification={this.props.toggleAddNotification} />
                <MenuSection
                    data={this.props.data}
                    slug="cold-drinks"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleAddNotification={this.props.toggleAddNotification} />
                <MenuSection
                    data={this.props.data}
                    slug="tea"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleAddNotification={this.props.toggleAddNotification} />
                <MenuSection
                    data={this.props.data}
                    slug="bakery"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleAddNotification={this.props.toggleAddNotification} />
                <SpecialInstructions
                    handleSpecialInstructions={this.props.handleSpecialInstructions} />
            </form>
        )
    }
});

module.exports = MenuFormContainer;

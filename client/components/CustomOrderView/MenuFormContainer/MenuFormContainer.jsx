import React from 'react'
import MenuSection from '../MenuSection/MenuSection'
import sass from './menu-form-container.scss'

var MenuFormContainer = React.createClass({

    propTypes: {
        data: React.PropTypes.object,
        handleAddItemToOrder: React.PropTypes.func,
        toggleAddNotification: React.PropTypes.func,
        toggleErrorNotification: React.PropTypes.func,
        handleSpecialInstructions: React.PropTypes.func
    },

    render: function() {
        return (
            <form>
                <MenuSection
                    data={this.props.data}
                    slug="hot-drinks"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleAddNotification={this.props.toggleAddNotification}
                    toggleErrorNotification={this.props.toggleErrorNotification} />
                <MenuSection
                    data={this.props.data}
                    slug="cold-drinks"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleAddNotification={this.props.toggleAddNotification}
                    toggleErrorNotification={this.props.toggleErrorNotification} />
                <MenuSection
                    data={this.props.data}
                    slug="tea"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleAddNotification={this.props.toggleAddNotification}
                    toggleErrorNotification={this.props.toggleErrorNotification} />
                <MenuSection
                    data={this.props.data}
                    slug="bakery"
                    handleAddItemToOrder={this.props.handleAddItemToOrder}
                    toggleAddNotification={this.props.toggleAddNotification}
                    toggleErrorNotification={this.props.toggleErrorNotification} />
            </form>
        )
    }
});

module.exports = MenuFormContainer;

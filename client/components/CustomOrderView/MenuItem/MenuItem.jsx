import React from 'react'
import AddToOrderButton from '../Options/AddToOrderButton'
import MilkType from '../Options/MilkType'
import Size from '../Options/Size'
import Quantity from '../Options/Quantity'
import Decaf from '../Options/Decaf'
import HotOrCold from '../Options/HotOrCold'
import sass from './menu-item.scss'
import _ from 'lodash'

var MenuItem = React.createClass({

    propTypes: {
        itemName: React.PropTypes.string,
        price: React.PropTypes.number,
        options: React.PropTypes.arrayOf(React.PropTypes.string),
        key: React.PropTypes.string,
        handleAddItemToOrder: React.PropTypes.func,
        calculateTotalAndTax: React.PropTypes.func,
        toggleAddNotification: React.PropTypes.func,
        toggleErrorNotification: React.PropTypes.func
    },

    getInitialState: function() {
        return {}
    },

    _checkFormComplete: function() {
        var requiredOptions = this.props.options.filter(function(option){
            return option !== 'decaf'
        })
        var optionsCheck = requiredOptions.map(function(option) {
            return this.state.hasOwnProperty(option)
        }, this);
        return optionsCheck.reduce(function(prev, current) {
            return prev && current
        }, true);
    },

    _handleMilkTypeChange: function(event) {
        this.setState({
            milkType: event.target.value,
        })
    },

    _handleSizeChange: function(event) {
        this.setState({
            size: event.target.value,
        })
    },

    _handleQuantityChange: function(event) {
        this.setState({
            quantity: event.target.value,
        })
    },

    _handleDecafChange: function(event) {
        this.setState({
            decaf: !this.state.decaf,
        })
    },

    _handleHotOrColdChange: function(event) {
        this.setState({
            hotOrCold: event.target.value,
        })
    },

    _handleAddItemToOrder: function(itemDetails) {
        this.props.handleAddItemToOrder(itemDetails)
        this.replaceState({})
    },


    _renderOption: function(option, index) {
        switch (option) {
            case 'milkType':
                return <MilkType
                            handleChange={this._handleMilkTypeChange}
                            key={index}
                            value={this.state.milkType || 'default'} />
            case 'size':
                return <Size
                            handleChange={this._handleSizeChange}
                            key={index}
                            value={this.state.size || 'default'} />
            case 'quantity':
                return <Quantity
                            handleChange={this._handleQuantityChange}
                            value={this.state.quantity || 'default'}
                            key={index} />
        }
    },

    _renderOption2: function(option, index) {
        switch (option) {
            case 'decaf':
                return <Decaf
                            handleChange={this._handleDecafChange}
                            key={index}
                            value={this.state.decaf || false} />
            case 'hotOrCold':
                return <HotOrCold
                            handleChange={this._handleHotOrColdChange}
                            key={index}
                            value={this.state.hotOrCold || false} />
        }
    },


    render: function() {
        return (
            <div className="drink-item">

                {/* Item Label */}
                <div className="item-name-wrap">
                    <div className="item-name"><label htmlFor="hot-drink">{this.props.itemName}</label></div>

                    {/* AddToOrderButton */}
                    <AddToOrderButton
                        handleAddItemToOrder={this._handleAddItemToOrder}
                        handleItemFormComplete={this._handleItemFormComplete}
                        toggleAddNotification={this.props.toggleAddNotification}
                        toggleErrorNotification={this.props.toggleErrorNotification}
                        checkFormComplete={this._checkFormComplete}
                        itemName={this.props.itemName}
                        price={this.props.price}
                        itemDetails={this.state} />
                </div>

                <div className="item-top-row">

                    <div className="item-options">
                        {/* MilkType - Size - Quantity */}
                        {this.props.options.map(this._renderOption)}

                    </div>
                    {/* Price */}
                    <div className="item-price">
                        ${this.props.price.toFixed(2)}
                    </div>
                </div>

                {/* Decaf - HotOrCold */}
                <div className="item-other-options">
                {this.props.options.map(this._renderOption2)}
                </div>
            </div>
        )
    }
});


module.exports = MenuItem;

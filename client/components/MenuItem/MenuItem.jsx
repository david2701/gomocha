import React from 'react'
import AddToOrderButton from '../Options/AddToOrderButton'
import MilkType from '../Options/MilkType'
import Size from '../Options/Size'
import Quantity from '../Options/Quantity'
import Decaf from '../Options/Decaf'
import HotOrCold from '../Options/HotOrCold'

var MenuItem = React.createClass({

    getInitialState: function() {
        return {}
    },

    _handleMilkTypeChange: function(event) {
        this.setState({
            milkType: event.target.value
        })
    },

    _handleSizeChange: function(event) {
        this.setState({
            size: event.target.value
        })
    },

    _handleQuantityChange: function(event) {
        this.setState({
            quantity: event.target.value
        })
    },

    _handleDecafChange: function(event) {
        this.setState({
            decaf: !this.state.decaf
        })
    },

    _handleHotOrColdChange: function(event) {
        this.setState({
            hotOrCold: event.target.value
        })
    },

    _handleAddToOrderButton: function() {
        // if (document.querySelector(".quantity-select").value > 0) {
        //     this.setState({
        //         addToOrderButton: true
        //     })
        // }
            console.log(this.state.addToOrderButton);

    },

    _renderOption: function(option) {
        switch (option) {
            case 'milk-type':
                return <MilkType
                            handleChange={this._handleMilkTypeChange} />
            case 'size':
                return <Size
                            handleChange={this._handleSizeChange} />
            case 'quantity':
                return <Quantity
                            handleChange={this._handleQuantityChange}
                            handleAddToOrderButton={this._handleAddToOrderButton} />
        }
    },

    _renderOption2: function(option) {
        switch (option) {
            case 'decaf':
                return <Decaf
                            handleChange={this._handleDecafChange} />
            case 'hot-or-cold':
                return <HotOrCold
                            handleChange={this._handleHotOrColdChange} />
        }
    },


    render: function() {
        return (
            <div className="drink-item">
                {/* Item Label */}
                <label htmlFor="hot-drink">{this.props.itemName}</label><br />

                <div className="item-top-row">
                    {/* MilkType - Size - Quantity */}
                    {this.props.options.map(this._renderOption)}

                    {/* AddToOrderButton */}
                    <AddToOrderButton
                        handleAddItemToOrder={this.props.handleAddItemToOrder}
                        itemName={this.props.itemName}
                        price={this.props.price}
                        itemDetails={this.state} />

                    {/* Price */}
                    <div className="item-price">
                        ${this.props.price.toFixed(2)}
                    </div>
                </div>

                {/* Decaf - HotOrCold */}
                {this.props.options.map(this._renderOption2)}

            </div>
        )
    }
});


module.exports = MenuItem;

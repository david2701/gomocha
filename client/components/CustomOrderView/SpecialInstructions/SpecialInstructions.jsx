import React from 'react'
import sass from './special-instructions.scss'

var SpecialInstructions = React.createClass({

    propTypes: {
        handleSpecialInstructions: React.PropTypes.func
    },

    render: function() {
        return (
            <section id="special-instructions">
                <textarea
                    onChange={this.props.handleSpecialInstructions}
                    placeholder="Special instructions for your order"
                    rows="2"
                    cols="100" ></textarea>
            </section>
        )
    }
});

module.exports = SpecialInstructions;

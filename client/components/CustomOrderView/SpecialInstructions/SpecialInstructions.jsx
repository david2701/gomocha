import React from 'react'

var SpecialInstructions = React.createClass({
    render: function() {
        return (
            <section id="special-instructions">
                <h2>Special Instructions</h2>
                <textarea
                    onChange={this.props.handleSpecialInstructions}
                    rows="6"
                    cols="40" ></textarea>
                <div className="divider"></div>
            </section>
        )
    }
});

module.exports = SpecialInstructions;

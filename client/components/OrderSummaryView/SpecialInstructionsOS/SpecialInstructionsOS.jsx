import React from 'react'

var SpecialInstructionsOS = React.createClass({
    render: function() {
        return (
            <div>
                <h4>Special Instructions:</h4>
                <p>{this.props.specialInstructions}</p>
            </div>
        )
    }
});

module.exports = SpecialInstructionsOS;

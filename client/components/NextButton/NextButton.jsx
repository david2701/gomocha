import React from 'react'
import sass from './next-button.scss'

var NextButton = React.createClass({

    render: function() {
        return (
            <input className="next-button" type="submit" value="Next" />

        )
    }
});

module.exports = NextButton;

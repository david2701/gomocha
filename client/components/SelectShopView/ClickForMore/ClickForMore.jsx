import React from 'react'
import sass from './click-for-more.scss'

var ClickForMore = React.createClass({
    render: function() {
        return (
            <div className="click-for-more-container">
                <button>Click for more results</button>
            </div>
        )
    }
});

module.exports = ClickForMore;

import React from 'react'
import sass from './add-item-notification.scss'

var AddItemNotification = React.createClass({

    render: function() {
        return (
            <div id="add-item-notification">
                <a className="add-item-notification" href="#add-item-notification">Item added to order</a>
            </div>
        )
    }
});

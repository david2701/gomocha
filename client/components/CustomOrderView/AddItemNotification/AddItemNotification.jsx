import React from 'react'
import sass from './add-item-notification.scss'

var AddItemNotification = React.createClass({

    render: function() {
        return (
            <div className={this.props.notificationState ? 'add-item-notification add-item-notification-show' : 'add-item-notification add-item-notification-hide'}
                onClick={() =>
                    this.props.toggleNotification()
                }>
                <a className="add-item-notification-text">Item added to order</a>
            </div>
        )
    }
});

module.exports = AddItemNotification;

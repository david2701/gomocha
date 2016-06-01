import React from 'react'
import sass from './add-item-notification.scss'

var AddItemNotification = React.createClass({

    render: function() {

        var notificationType = '';
        var notificationText = '';

        if (this.props.notification.add) {
            notificationType = 'item-notification add-item-notification item-notification-show';
            notificationText = 'Item added to order!';
        } else if (this.props.notification.delete) {
            notificationType = 'item-notification delete-item-notification item-notification-show'
            notificationText = 'Item removed from order!'
        } else {
            notificationType = 'item-notification item-notification-hide';
        }

        return (
            <div className={notificationType}>
                <a className="item-notification-text">{notificationText}</a>
            </div>
        )
    }
});

module.exports = AddItemNotification;

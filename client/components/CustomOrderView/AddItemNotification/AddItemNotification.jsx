import React from 'react'
import sass from './add-item-notification.scss'

var AddItemNotification = React.createClass({

    propTypes: {
        notification: React.PropTypes.shape({
            add: React.PropTypes.bool,
            delete: React.PropTypes.bool,
            error: React.PropTypes.bool,
            form: React.PropTypes.bool,
        })
    },

    render: function() {

        var notificationType = '';
        var notificationText = '';

        if (this.props.notification.add) {
            notificationType = 'item-notification add-item-notification item-notification-show';
            notificationText = 'Item added to order!';
        } else if (this.props.notification.delete) {
            notificationType = 'item-notification delete-item-notification item-notification-show'
            notificationText = 'Item removed from order!'
        } else if (this.props.notification.error) {
            notificationType = 'item-notification error-item-notification item-notification-show';
            notificationText = 'You need to fill in the item details!'
        } else if (this.props.notification.form) {
            notificationType = 'item-notification error-item-notification item-notification-show';
            notificationText = 'Add an item to your order to continue'
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

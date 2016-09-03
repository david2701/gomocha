import React from 'react'
import sass from './additional-info-notification.scss'

var AdditionalInfoNotification = React.createClass({

    propTypes: {
        notification: React.PropTypes.shape({
            add: React.PropTypes.bool,
            delete: React.PropTypes.bool,
            error: React.PropTypes.bool,
            form: React.PropTypes.bool,
            additionalInfo: React.PropTypes.bool
        })
    },

    render: function() {

        var notificationType = '';
        var notificationText = '';

        if (this.props.notification.additionalInfo) {
            notificationType = 'item-notification error-item-notification item-notification-show';
            notificationText = 'Select your method of transportation to continue'
        }
        else {
            notificationType = 'item-notification item-notification-hide';
        }

        return (
            <div className={notificationType}>
                <a className="item-notification-text">{notificationText}</a>
            </div>
        )
    }
});

module.exports = AdditionalInfoNotification;

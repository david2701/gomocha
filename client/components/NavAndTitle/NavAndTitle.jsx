import React from 'react'
import sass from './nav-and-title.scss'
import AddItemNotification from '../AddItemNotification/AddItemNotification'

var NavAndTitle = React.createClass({


    propTypes: {
        toggleNotification: React.PropTypes.func,
        notificationState: React.PropTypes.bool
    },

    render: function() {
        return (
            <div>
                <AddItemNotification
                toggleNotification={this.props.toggleNotification}
                notificationState={this.props.notificationState} />

                <nav className="main-nav">
                    <ul>
                        <li>Home</li>
                        <li>My Account</li>
                        <li>Log Out</li>
                    </ul>
                </nav>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
});

module.exports = NavAndTitle;

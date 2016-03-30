import React from 'react'
import sass from './nav-and-title.scss'
import AddItemNotification from '../AddItemNotification/AddItemNotification'

var NavAndTitle = React.createClass({

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
                <h1>Create your order</h1>
            </div>
        )
    }
});

module.exports = NavAndTitle;

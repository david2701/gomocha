import React from 'react'
import sass from './username-view.scss'
import sass2 from '../../App/app.scss'
import { Link } from 'react-router'

var UsernameView = React.createClass({

    _handleUsernameSubmit: function(event) {
        event.preventDefault();
        var username = this._usernameInput.value;
        this.props.handleUsername(username);
    },

    render: function() {
        return (
            <div>
                <div className="title-cover-landing">
                    <h1>The fastest way to your morning coffee.</h1>
                        <form onSubmit={this._handleUsernameSubmit}>
                            <input
                                type="text"
                                placeholder="Enter a username to begin"
                                name="username"
                                ref={(c) => this._usernameInput = c}
                                required />
                            <button>Go!</button>

                        </form>
                </div>
                <div className="landing-icon-wrap">
                    <div className="landing-icon-1">
                        <img src="/img/landing-icon-1.png" />
                        <h2>Select a shop</h2>
                    </div>
                    <div className="landing-icon-2">
                        <img src="/img/landing-icon-2.png" />
                        <h2>Place your order</h2>
                    </div>
                    <div className="landing-icon-3">
                        <img src="/img/landing-icon-3.png" />
                        <h2>Ready when you arrive!</h2>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = UsernameView;

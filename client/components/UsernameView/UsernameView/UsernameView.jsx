import React from 'react'
import Footer from '../../DashboardView/Footer/Footer'
import sass from './username-view.scss'
import sass2 from '../../App/app.scss'
import { Link } from 'react-router'

var UsernameView = React.createClass({

    propTypes: {
        handleUsername: React.PropTypes.func
    },

    _handleUsernameSubmit: function(event) {
        event.preventDefault();
        var username = this._usernameInput.value;
        this.props.handleUsername(username);
    },

    render: function() {
        return (
            <div className="username-container">
                <nav>
                    <a href="/"><img src="img/gomocha-logo-lg.png" /></a>
                    <ul>
                        <a href="#how-it-works"><li>How it works</li></a>
                        <li>About</li>
                        <li>Blog</li>
                    </ul>
                </nav>
                <div className="title-cover-landing">
                    <div className="title-cover-left"></div>
                    <div className="title-cover-right">
                        <div className="title-cover-right-child">
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
                    </div>
                </div>
                <div className="landing-icon-wrap">
                    <div className="how-it-works"><a name="how-it-works"></a>How it works</div>
                    <div className="landing-icon landing-icon-1">
                        <img src="/img/landing-icon-1.png" />
                        <h2>Select a shop</h2>
                    </div>
                    <div className="landing-icon landing-icon-2">
                        <img src="/img/landing-icon-2.png" />
                        <h2>Place your order</h2>
                    </div>
                    <div className="landing-icon landing-icon-3">
                        <img src="/img/landing-icon-3.png" />
                        <h2>Ready when you arrive!</h2>
                    </div>
                </div>
                <div className="landing-icon-button"><button>Get Started!</button></div>
                <div className="company-logo-container">
                    <h2>As Used By</h2>
                    <img src="img/starbucks.png" />
                    <img src="img/blue-bottle.png" />
                    <img src="img/philz.png" />
                    <img src="img/peets.png" />
                </div>
                <Footer />
            </div>
        )
    }
})

module.exports = UsernameView;

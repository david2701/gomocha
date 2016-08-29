import React from 'react'
import sass from './footer.scss'
import { Link } from 'react-router'

var Footer = React.createClass({


    render: function() {
        return (
            <div className="footer-container">
                <div className="footer-col-1">
                    <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-youtube-square fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-google-plus-square fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                    <p className="footer-text footer-text-1">About GoMocha</p>
                    <p className="footer-text">GoMocha Blog</p>
                    <p className="footer-text">Privacy Policy</p>
                    <p className="footer-text">Terms and Conditions</p>
                    <p className="footer-copyright">©2016 GoMocha, Inc.</p>
                </div>
            </div>
        )
    }
});

module.exports = Footer;

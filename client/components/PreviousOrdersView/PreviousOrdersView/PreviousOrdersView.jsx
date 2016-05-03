import React from 'react'
import { Link } from 'react-router'
import sass from './previous-orders-view.scss'
import sass2 from '../../App/app.scss'

var PreviousOrdersView = React.createClass({
    render: function() {

        return (
            <div>
                <div className="title-cover">
                    <h1>Previous Orders</h1>
                </div>

            </div>
        )
    }
});

module.exports = PreviousOrdersView;

import React from 'react'
import sass from './business-admin-view.scss'
import OrdersContainer from '../OrdersContainer/OrdersContainer'



var BusinessAdminView = React.createClass({

    render: function() {

        return (
            <div className="ba-view-container">
                <div className='ba-view-wrap'>
                    <h1>Today's Orders</h1>
                    <OrdersContainer />
                </div>

            </div>
        )
    }
})







module.exports = BusinessAdminView

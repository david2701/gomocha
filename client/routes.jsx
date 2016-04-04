import { Route, IndexRoute } from 'react-router'
import React from 'react'
import DashboardView from './components/DashboardView/DashboardView/DashboardView'
import CustomOrderView from './components/CustomOrderView/CustomOrderView/CustomOrderView'
import SelectShopView from './components/SelectShopView/SelectShopView/SelectShopView'
import AdditionalInfoView from './components/AdditionalInfoView/AdditionalInfoView/AdditionalInfoView'
import OrderSummaryView from './components/OrderSummaryView/OrderSummaryView/OrderSummaryView'
import ConfirmationView from './components/ConfirmationView/ConfirmationView/ConfirmationView'
import dummyData from '../dummy-data.json'

var App = React.createClass({
    render: function() {
        return (
            <div>{React.cloneElement(this.props.children
                 ,{data: dummyData})
                }
            </div>
        )
    }
});


var Routes = <Route path="/" component={App}>
                <Route path="dashboard" component={DashboardView} />
                <Route path="select-shop" component={SelectShopView} />
                <Route path="custom-order" component={CustomOrderView} />
                <Route path="additional-info" component={AdditionalInfoView} />
                <Route path="order-summary" component={OrderSummaryView} />
                <Route path="confirmation" component={ConfirmationView} />
            </Route>

module.exports = Routes;

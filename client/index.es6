import sass from './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import { Router, browserHistory } from 'react-router'

ReactDOM.render(
    <Router
        routes={Routes}
        history={browserHistory}
        onUpdate={() => window.scrollTo(0, 0)} ></Router>

    ,document.getElementById('root')
)


// STYLING BUGG FIXES AND FEATURES
// payment info section can be fancier
// orderTotalRow styling OrderSummaryView
// width of progress bar on ConfirmationView
// Section marks for progress bar
// redo loading icon
// delete item notification doesn't occur when deleting from order summary
// CustomOrderView menu and order total overlap for a small width interval
// fix footer from flying during SelectShopView loading
// style selects
// add smooth transitions between views
// add previous and favorite orders to dashboard view. Or show the last order. Or a sneak peak of each with a see all link.

// BASIC JS BUGGS FIXES AND FEATURES
// Add date to each order regardless
// have a conditional that checks if userLocation is taken, and promps user if not. ex: Justin's phone stuck in loop because didn't have userLocation
// add conditions to Link buttons -- add class based on length of items array -- use addItemToOrderButton logic for additional info page condition
// make calls for time it will take to walk/bike/drive at same time you call getDetails
// can't access prev or fav orders from SelectShopView
// change time output on ConfirmationView if user selects pickup time
// fix console errors on previous and favorited orders


// LONG TERM MAJOR FEATURES
// share your order on Facebook.
// Authentication using StormPath/Auth0 (passwordless?) - Google and Facebook auth
// get previous and favorite orders to work (need auth first)
// be able to search for shops in the area
// be able to start order from previous and favorites pages. replace items in state with items in prev/fav order

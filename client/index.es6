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
// orderTotalRow styling OrderSummaryView
// width of progress bar on ConfirmationView
// Section marks for progress bar
// redo loading icon
// checkbox styling
// delete item notification doesn't occur when deleting from order summary
// add smooth transitions between views
// add previous and favorite orders to dashboard view. Or show the last order. Or a sneak peak of each with a see all link.

// BASIC JS BUGGS FIXES AND FEATURES
// Add date to each order regardless
// have a conditional that checks if userLocation is taken, and promps user if not. ex: Justin's phone stuck in loop because didn't have userLocation
// make calls for time it will take to walk/bike/drive at same time you call getDetails
// change UX of adding items to order. Basic click with modal to choose options
// ask for location after user logs in
// only display method of trans if user selects "Now"
// display the time the order will be ready

// LONG TERM MAJOR FEATURES
// share your order on Facebook.
// Authentication using StormPath/Auth0 (passwordless?) - Google and Facebook auth
// be able to search for shops in the area or wherever you want
// be able to start order from previous and favorites pages. replace items in state with items in prev/fav order

import sass from './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
// import dummyData from '../dummy-data.json'
import Routes from './routes'
import { Router, browserHistory } from 'react-router'

ReactDOM.render(
    <Router
        routes={Routes}
        history={browserHistory}
        onUpdate={() => window.scrollTo(0, 0)} ></Router>

    ,document.getElementById('root')
)


// have a conditional that checks if userLocation is taken, and promps user if not. ex: Justin's phone stuck in loop because didn't have userLocation
// payment info section can be fancier
// be able to start order from previous and favorites pages. replace items in state with items in prev/fav order
// add date to each order
// share your order on Facebook.
// Can't click on shop that's closed.
// Reorder from favorites and previous orders.
// Section marks for progress bar

// make calls for time it will take to walk/bike/drive at same time you call getDetails
// redo loading icon
// be able to search for shops in the area
// can't click on shop if closed
// new CustomOrderView layout

// add conditions to Link buttons -- add class based on length of items array -- use addItemToOrderButton logic for additional info page condition

import sass from './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
// import dummyData from '../dummy-data.json'
import Routes from './routes'
import { Router, browserHistory } from 'react-router'
import superagent from 'superagent'

ReactDOM.render(
    <Router routes={Routes} history={browserHistory}></Router>

    ,document.getElementById('root')
)



// QUESTIONS:
// 1.
// 2.

// NEXT STEPS:

// implement propTypes to components


// make api call for extra info in handler that sets shop on state, use this extra info on confirmation screen (phone number, distance from, formatted address, etc.)
    // use id on object, and use method for fetching a particular place in google maps api

// install moment into select pickup time
// add conditions to Link buttons -- add class based on length of items array -- use addItemToOrderButton logic for additional info page condition
// look into Locu and Google Maps API

// DONE create state for remaining views on App component state. Pass down to children components
// DONE get selected shop set to state, render it out in confirmation screen
// DONE pickUp time can't be set if "now" is checked, if someone checks pickup time and then decided now after already clicking now
// DONE add milk type, decaf, hot or cold options to order total row
// DONE add quantity * price feature when calculating total
// DONE reuse OrderTotal components for both CustomOrderView and OrderSummaryView
// DONE add Link to remaining View components
// DONE use setTimeout for add item to order notification/confirmation
// DONE user cannot add item unless all form elements are filled out
// DONE clear all form elements after add to order button is clicked
// DONE delete functionality on orderTotal
// DONE onChange, plus button appears to add item to order -- callback
// DONE onChange, plus button appears to add item to order -- callback
// DONE after user clicks add to order button -> quantity, size, drink name, and price are sent to table row component -- state callback
// DONE order total is calculated with each add to order click by summing all component prices -- state callback
// DONE tax is included in order total calculation

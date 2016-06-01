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


// 0. have a conditional that checks if userLocation is taken, and promps user if not. ex: Justin's phone stuck in loop because didn't have userLocation
// 1. payment info section can be fancier
// 2. make add to order button more noticeable, maybe a small notification
// 4. be able to start order from previous and favorites pages. replace items in state with items in prev/fav order
// 4.5 add date to each order

// implement propTypes to components
// make calls for time it will take to walk/bike/drive at same time you call getDetails


// add conditions to Link buttons -- add class based on length of items array -- use addItemToOrderButton logic for additional info page condition

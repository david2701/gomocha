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



// 1. payment info section can be fancier
// 2. make add to order button more noticeable, maybe a small notification
// 3. fetch previous and favorite orders when clicking those pages
// 4. be able to start order from previous and favorites pages
// 5. add item deleted notification
// 6. make landing page responsive

// implement propTypes to components
// make calls for time it will take to walk/bike/drive at same time you call getDetails


// add conditions to Link buttons -- add class based on length of items array -- use addItemToOrderButton logic for additional info page condition

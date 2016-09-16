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


// fix responsiveness of dashboard icons
// add amazon etc payment options to credit card section
// make the confirmation page sexy!
// see if you can make the app more playful

import sass from './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import dummyData from '../dummy-data.json'

ReactDOM.render(
    <App data={dummyData}/>,
    document.getElementById('root')
)

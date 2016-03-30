import sass from './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import SelectShop from './components/SelectShop/SelectShop'
import dummyData from '../dummy-data.json'

ReactDOM.render(
    <SelectShop data={dummyData} />,
    // <App data={dummyData}/>,
    document.getElementById('root')
)

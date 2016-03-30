import sass from './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/CustomOrderView/App/App'
import SelectShop from './components/SelectShopView/SelectShop/SelectShop'
import AdditionalInfo from './components/AdditionalInfoView/AdditionalInfo/AdditionalInfo'
import dummyData from '../dummy-data.json'


ReactDOM.render(
    <SelectShop data={dummyData} />,
    // <App data={dummyData}/>,
    // <AdditionalInfo />,
    document.getElementById('root')
)

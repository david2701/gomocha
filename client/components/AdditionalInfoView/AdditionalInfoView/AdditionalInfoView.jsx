import React from 'react'
import SelectMethodOfTrans from '../SelectMethodOfTrans/SelectMethodOfTrans'
import SelectPickUpTime from '../SelectPickUpTime/SelectPickUpTime'
import SelectIfFavorite from '../SelectIfFavorite/SelectIfFavorite'
import EnterPaymentInfo from '../EnterPaymentInfo/EnterPaymentInfo'
import { Link } from 'react-router'
import sass from '../../App/app.scss'

var AdditionalInfoView = React.createClass({

    render: function() {
        return (
            <div>
                <h1>Tell us a little more!</h1>
            <form>
                <SelectMethodOfTrans />
                <SelectPickUpTime />
                <SelectIfFavorite />
                <EnterPaymentInfo />
                <Link to="/order-summary"><button className="next-button">Next</button></Link>
            </form>
            </div>
        )
    }
});

module.exports = AdditionalInfoView;

import React from 'react'
import NavAndTitle from '../../NavAndTitle/NavAndTitle'
import SelectMethodOfTrans from '../SelectMethodOfTrans/SelectMethodOfTrans'
import SelectPickUpTime from '../SelectPickUpTime/SelectPickUpTime'
import SelectIfFavorite from '../SelectIfFavorite/SelectIfFavorite'
import EnterPaymentInfo from '../EnterPaymentInfo/EnterPaymentInfo'
import NextButton from '../../NextButton/NextButton'

var AdditionalInfo = React.createClass({
    render: function() {
        return (
            <div>
            <NavAndTitle title='Additional Info' />
            <form>
                <SelectMethodOfTrans />
                <SelectPickUpTime />
                <SelectIfFavorite />
                <EnterPaymentInfo />
                <NextButton />
            </form>
            </div>
        )
    }
});

module.exports = AdditionalInfo;

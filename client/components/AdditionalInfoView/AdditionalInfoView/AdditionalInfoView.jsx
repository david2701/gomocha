import React from 'react'
import NavAndTitle from '../../NavAndTitle/NavAndTitle'
import SelectMethodOfTrans from '../SelectMethodOfTrans/SelectMethodOfTrans'
import SelectPickUpTime from '../SelectPickUpTime/SelectPickUpTime'
import SelectIfFavorite from '../SelectIfFavorite/SelectIfFavorite'
import EnterPaymentInfo from '../EnterPaymentInfo/EnterPaymentInfo'
import NextButton from '../../NextButton/NextButton'

var AdditionalInfoView = React.createClass({

    contextTypes: {
      router: React.PropTypes.object
    },

    _handleNext: function() {
        const path = `/order-summary`
        this.context.router.push(path)
    },

    render: function() {
        return (
            <div>
            <NavAndTitle title='Additional Info' />
            <form>
                <SelectMethodOfTrans />
                <SelectPickUpTime />
                <SelectIfFavorite />
                <EnterPaymentInfo />
                <button onClick={this._handleNext} className="next-button">Next</button>
            </form>
            </div>
        )
    }
});

module.exports = AdditionalInfoView;

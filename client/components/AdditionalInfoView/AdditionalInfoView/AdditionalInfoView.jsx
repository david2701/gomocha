import React from 'react'
import SelectMethodOfTrans from '../SelectMethodOfTrans/SelectMethodOfTrans'
import SelectPickUpTime from '../SelectPickUpTime/SelectPickUpTime'
import SelectIfFavorite from '../SelectIfFavorite/SelectIfFavorite'
import EnterPaymentInfo from '../EnterPaymentInfo/EnterPaymentInfo'
import { Link } from 'react-router'
import sass from '../../App/app.scss'
import sass2 from './additional-info-view.scss'

var AdditionalInfoView = React.createClass({

    render: function() {
        return (
            <div>
            <div className="title-cover">
                <h1>Tell us a little more!</h1>
                <div className="userProgress">
                    <div id="threeOfFive">
                    </div>
                </div>
            </div>

            <div className="main-wrap">
                <form>
                    <SelectMethodOfTrans
                        handleMethodOfTrans={this.props.handleMethodOfTrans} />
                    <SelectPickUpTime
                        handlePickupTime={this.props.handlePickupTime}
                        value={this.props.pickupTime || 'true'} />
                    <SelectIfFavorite
                        handleFavorite={this.props.handleFavorite}
                        value={this.props.favorite || false} />
                    <EnterPaymentInfo
                        handleCCName={this.props.handleCCName}
                        handleCCNumber={this.props.handleCCNumber}
                        handleCCExpMonth={this.props.handleCCExpMonth}
                        expMonthValue={this.props.expMonth || 'default'}
                        handleCCExpYear={this.props.handleCCExpYear}
                        expYearValue={this.props.expYear || 'default'}
                        handleCCCVV={this.props.handleCCCVV} />
                    <div className="next-button-container">
                        <Link to="/order-summary"><button className="next-button">Next</button></Link>
                    </div>
                </form>
            </div>
        </div>
        )
    }
});

module.exports = AdditionalInfoView;

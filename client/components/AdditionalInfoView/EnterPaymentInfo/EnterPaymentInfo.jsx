import React from 'react'
import sass from './enter-payment-info.scss'

var EnterPaymentInfo = React.createClass({

    propTypes: {
        handleCCName: React.PropTypes.func,
        handleCCNumber: React.PropTypes.func,
        handleCCExpMonth: React.PropTypes.func,
        expMonthValue: React.PropTypes.string,
        handleCCExpYear: React.PropTypes.func,
        expYearValue: React.PropTypes.string,
        handleCCCVV: React.PropTypes.func
    },

    render: function() {
        return (
            <div className="enter-payment-info-container">
                <h2>Enter Payment Info</h2>
                <div className="payment-info-section payment-name">
                    <p>Name on card</p>
                        <input
                            onChange={this.props.handleCCName}
                            type="text"
                            placeholder="Name"
                            required />
                </div>
                <div className="payment-info-section payment-card-number">
                    <p>Credit Card Number</p>
                        <input
                            onChange={this.props.handleCCNumber}
                            type="text"
                            placeholder="Card number"
                            maxLength="16"
                            required />
                </div>
                <div className="payment-info-section payment-month-year">
                    <p>Expiration Date</p>
            <select
                className="payment-month"
                onChange={this.props.handleCCExpMonth}
                value={this.props.expMonthValue}
                name="exp-month"
                 >
                <option value="default">Month</option>
                <option value="01">Jan (01)</option>
                <option value="02">Feb (02)</option>
                <option value="03">Mar (03)</option>
                <option value="04">Apr (04)</option>
                <option value="05">May (05)</option>
                <option value="06">Jun (06)</option>
                <option value="07">Jul (07)</option>
                <option value="08">Aug (08)</option>
                <option value="09">Sep (09)</option>
                <option value="10">Oct (10)</option>
                <option value="11">Nov (11)</option>
                <option value="12">Dec (12)</option>
            </select>
            <select
                className="payment-year"
                onChange={this.props.handleCCExpYear}
                value={this.props.expYearValue}
                name="exp-year" >
                <option value="default">Year</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
                </div>
                <div className="payment-info-section payment-csv">
                    <p>CSV</p>
                        <input
                            onChange={this.props.handleCCCVV}
                            type="text"
                            placeholder="CSV"
                            maxLength="3"
                            required />
                </div>
            </div>
        )
    }
});

module.exports = EnterPaymentInfo;

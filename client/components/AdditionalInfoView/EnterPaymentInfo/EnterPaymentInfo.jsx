import React from 'react'
import sass from './enter-payment-info.scss'

var EnterPaymentInfo = React.createClass({
    render: function() {
        return (
            <div className="enter-payment-info-container">
                <h2>Enter Payment Info</h2>
            <div className="payment-info-section">
                    <label>Name on Card<span>  </span>
                        <input
                            onChange={this.props.handleCCName}
                            type="text"
                            placeholder="Card Holder's Name"
                            required />
                    </label>
                </div>
                <div className="payment-info-section">
                    <label>Card Number<span>  </span>
                        <input
                            onChange={this.props.handleCCNumber}
                            type="number"
                            placeholder="Debit/Credit Card Number"
                            maxLength="16"
                            required />
                        </label>
                </div>
                <div className="payment-info-section">
            <label>Expiration Date<span>  </span></label>
            <select
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
            <select
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
                </div>
                <div className="payment-info-section">
                    <label>CVV<span>  </span>
                        <input
                            onChange={this.props.handleCCCVV}
                            type="number"
                            placeholder="Security Code"
                            maxLength="3"
                            required />
                        </label>
                </div>
            </div>
        )
    }
});

module.exports = EnterPaymentInfo;

import React from 'react'
import sass from './ba-order.scss'

class BAOrder extends React.Component {
    render() {
        return (
            <div>
                <div className="ba-order">
                    <div className="ba-order-left">
                        <h2>Amit R.</h2>
                        <p>1 - 16oz. Mocha Latte</p>
                    </div>
                    <div className="ba-order-right">
                        <p>Time until arrival: <span className="ba-order-time">3 min</span></p>
                        <button>
                            Complete
                            <i className="fa fa-check-circle fa-2x" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div className="ba-order">
                    <div className="ba-order-left">
                        <h2>Robby Y.</h2>
                        <p>2 - 20oz. Caramel Frap</p>
                    </div>
                    <div className="ba-order-right">
                        <p>Time until arrival: <span className="ba-order-time">7 min</span></p>
                        <button>
                            Complete
                            <i className="fa fa-check-circle fa-2x" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div className="ba-order">
                    <div className="ba-order-left">
                        <h2>Jake B.</h2>
                        <p>1 - 16oz. Green Tea</p>
                    </div>
                    <div className="ba-order-right">
                        <p>Time until arrival: <span className="ba-order-time">9 min</span></p>
                        <button>
                            Complete
                            <i className="fa fa-check-circle fa-2x" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div className="ba-order">
                    <div className="ba-order-left">
                        <h2>Preston O.</h2>
                        <p>1 - 24oz. Americano</p>
                    </div>
                    <div className="ba-order-right">
                        <p>Time until arrival: <span className="ba-order-time">12 min</span></p>
                        <button>
                            Complete
                            <i className="fa fa-check-circle fa-2x" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


module.exports = BAOrder;

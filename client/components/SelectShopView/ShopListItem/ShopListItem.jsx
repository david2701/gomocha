import React from 'react'
import sass from './shop-list-item.scss'
import { Link } from 'react-router'

var ShopListItem = React.createClass({

    propTypes: {
        shop: React.PropTypes.object.isRequired
    },

    render: function() {

        // var imageUrl = this.props.shop.photos.length ?
        //     this.props.shop.photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300})
        // :   ''

        // style={{
        //        background: 'url(' + imageUrl + ')' + 'no-repeat center center',
        //        backgroundSize: 'cover'
        //    }}

        return (
            <div>
                <Link to="/custom-order">
                <div className="shop-list-item-container"
                onClick={() => this.props.handleSelectedShop(this.props.shop)} >
                    <div className="shop-list-item-details">
                    <h2>{this.props.shop.name}</h2>
                    <p>{this.props.shop.vicinity}</p>

                <div className="shop-list-bottom-row">
                        {this.props.shop.opening_hours.open_now ?
                        <div className="open-now"><i className="fa fa-clock-o" aria-hidden="true"></i> Open now!</div>
                        : <div className="closed-now"><i className="fa fa-clock-o" aria-hidden="true"></i> Currently closed</div>}

                        {/*<p className="shop-list-distance">Distance: N/A</p>*/}
                    </div>
                </div>
                </div>
                </Link>
            </div>
        )
    }
});


module.exports = ShopListItem;

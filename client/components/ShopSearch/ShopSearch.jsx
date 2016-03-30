import React from 'react'
import sass from './shop-search.scss'

var ShopSearch = React.createClass({

    render: function() {
        return (
            <div className="shop-search-container">
                <form>
                <input type="text" /><input type="submit" value="Search" />
                </form>
            </div>
        )
    }
});

module.exports = ShopSearch;

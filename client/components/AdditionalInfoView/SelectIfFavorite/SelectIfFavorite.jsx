import React from 'react'
import sass from './select-if-favorite.scss'

var SelectIfFavorite = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Favorite this order?</h2>
            <div className="select-if-favorite">
                    <label>Yes! <input
                                    onChange={this.props.handleFavorite}
                                    type="checkbox"
                                    value={this.props.value} />
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = SelectIfFavorite;

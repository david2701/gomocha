import React from 'react'
import sass from './select-if-favorite.scss'

var SelectIfFavorite = React.createClass({

    propTypes: {
        handleFavorite: React.PropTypes.func,
        value: React.PropTypes.bool
    },

    render: function() {
        return (
            <div className="select-if-favorite-container">
                <h2>Favorite this order?</h2>
                <p>Yes!</p>
            <div className="select-if-favorite">
                    <input
                        onChange={this.props.handleFavorite}
                        type="checkbox"
                        value={this.props.value}
                        id="select-if-favorite"
                        name="favorite" />
                    <label htmlFor="select-if-favorite"></label>
                </div>
            </div>
        )
    }
});

module.exports = SelectIfFavorite;

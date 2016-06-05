import React from 'react'
import _ from 'lodash'
import sass from './options.scss'

var AddToOrderButton = React.createClass({

    // componentDidMount: function() {
    //     // Get the components DOM node
    //     var elem = this.React.findDOMNode();
    //     // Set the opacity of the element to 0
    //     elem.style.opacity = 0;
    //     window.requestAnimationFrame(function() {
    //         // Now set a transition on the opacity
    //         elem.style.transition = "opacity 250ms";
    //         // and set the opacity to 1
    //         elem.style.opacity = 1;
    //     });
    // },

    render: function() {
        var itemDetails = _.assign({itemName: this.props.itemName, price: this.props.price}, this.props.itemDetails);

        return(
            <div className="add-to-order-wrap">
                <div className='add-to-order'
                     onClick={() => {
                         this.props.handleAddItemToOrder(itemDetails)
                         this.props.toggleAddNotification()
                     }}>
                    Click to add
                </div>
            </div>
        )
    }
});

module.exports = AddToOrderButton;

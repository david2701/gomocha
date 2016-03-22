import React from 'react'

var MilkType = React.createClass({
    render: function() {
        return (
            <select name="milk-type" defaultValue="Milk Type">
                <option value="Milk Type" disabled>Milk Type</option>
                <option value="almond-milk">Almond Milk</option>
                <option value="soy-milk">Soy Milk</option>
                <option value="rice-milk">Rice Milk</option>
                <option value="whole-milk">Whole Milk</option>
                <option value="non-fat-milk">Non-Fat Milk</option>
            </select>
        )
    }
});

module.exports = MilkType;

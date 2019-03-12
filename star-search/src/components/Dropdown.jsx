import React from 'react';

const DropdownBox = props => {
    return <div>
        <label className="meteorite">To Visualise Table Data (below):</label>
        <select name="dropDown" id="dropDown" onChange={props.handleSelect}>
        <option value="bubble" default>Meteorite Composition</option>
        <option value="bar">Fell vs Found</option>
        </select>
        </div>
};

export default DropdownBox;
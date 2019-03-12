import React from 'react';

const DropdownBox = props => {
    return <select name="dropDown" id="dropDown" onChange={props.handleSelect}>
        <option value="bubble" default>Meteorite Composition</option>
        <option value="bar">Fell vs Found</option>
        </select>
};

export default DropdownBox;
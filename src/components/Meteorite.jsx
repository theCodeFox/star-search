import React from 'react';

/*
fall: "Fell"
geolocation: {type: "Point", coordinates: Array(2)}
id: "1"
mass: "21"
name: "Aachen"
nametype: "Valid"
recclass: "L5"
reclat: "50.775000"
reclong: "6.083330"
year: "1880-01-01T00:00:00.000"
*/

const Meteorite = ({ meteoriteData }) => {
    const { name, id, mass, recclass, fall } = meteoriteData;
    return <li id={id} className='meteorite'>
        <h3>{name}</h3>
        <p>mass: {mass || 'unknown'}g</p>
        <p>composition: {recclass}</p>
        <p>Status: {fall}</p>
    </li>
};

export default Meteorite;
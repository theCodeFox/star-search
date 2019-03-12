import React from 'react'
import Meteorite from './Meteorite';

const MeteoriteLandings = props => {
    return <ul id='meteoriteList'>{props.meteoriteData.map((meteorite, i) => {
        return <Meteorite key={meteorite.id} meteoriteData={props.meteoriteData[i]}/>
    })}</ul>
};

export default MeteoriteLandings;
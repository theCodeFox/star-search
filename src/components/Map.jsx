import React from "react";
import "../styles/leaflet.css";
import { mapLocations } from '../utils/utils'
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

// const position = [51.505, -0.09]
const MeteoriteMap = (props) => {
  const positionsArray = mapLocations(props.meteoriteData);
  return <div>
  <Map className="map" center={[40, 0]} zoom={1}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
  />
  {positionsArray.map(position => {
    return <Marker key={position[3]} position={position.slice(0, 2)}>
      <Popup>{position[2]}<br />{position[4]}</Popup>
    </Marker>
    })}
  </Map>
  </div>
}


export default MeteoriteMap;
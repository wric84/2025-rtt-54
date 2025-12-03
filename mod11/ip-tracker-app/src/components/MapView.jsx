// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { useEffect, useState } from "react";
// import { MapContainer } from 'react-leaflet/MapContainer'

import {
    MapContainer,
   TileLayer,
   Marker,
   Popup
} from 'react-leaflet'

function MapView({ipData}) {
    if(!ipData) return null
 const position = [ipData.location.lat, ipData.location.lng]

 console.log(ipData);
 

return(
  <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height: "100%", width:"100%"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
)
}
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     if (!map && !document.getElementById("map"))


//     const m = L.map("map").setView([51.505, -0.09], 13);

//     L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       maxZoom: 19,
//       attribution:
//         '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//     }).addTo(m);

//     setMap(m);  

//   }, []);

//   return (
//     <div id="map" style={{ height: "300px" }}></div>
//   );


export default MapView;
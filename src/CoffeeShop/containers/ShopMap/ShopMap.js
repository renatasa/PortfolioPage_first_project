import React from "react";
import {
            GoogleMap, 
            useLoadScript, 
            Marker, 
            InfoWindow
        } from "@react-google-maps/api";
       // import {formatRelative} from "date-fns";

//import "@reach/combobox/styles.css";

const libraries = ["places"];
const mapContainerStyle = {
    width: '100vw', 
    height: '100vh'
}

const center = {
    lat: 43.653225, 
    lng: -79.383186
}

export default function ShopMap(){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: '', 
        libraries
    });

    if(loadError) return "Error loading maps";
    if(!isLoaded) return "Loading Maps";

    return <div><GoogleMap 
                    mapContainerStyle={mapContainerStyle}
                    zoom={8}
                    center={center} 
                    ></GoogleMap></div>
}


// import React, { Component } from 'react' ;
// import { Map, TileLayer, Marker, Popup } from '../../src' ;

// // type State = {
// //   lat: number,
// //   lng: number,
// //   zoom: number,
// // }

// export default class SimpleExample extends Component {
//   state = {
//     lat: 51.505,
//     lng: -0.09,
//     zoom: 13,
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng]
//     return (
//       <Map center={position} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </Map>
//     )
//   }
// }


// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//          lat: -1.2884,
//          lng: 36.8233
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCEjqFxUl3vV6XvDPbMlYaOg7MAciJff2I'
// })(MapContainer);

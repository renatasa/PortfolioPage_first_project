import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

const Map =()=> {
    
        return  (<GoogleMap 
                        defaultZoom={10} 
                        defautlCenter={{lat: 12, lng: 12}}
                />
        )
    
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


const CoffeeMap=()=>{
        return  (
                <div style = {{width: '5vw', height: '5vh'}}>
                   <WrappedMap  
                      googleMapURL={`https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393&query_place_id=ChIJKxjxuaNqkFQR3CK6O1HNNqY`}
                      loadingElement = {<div style={{height: "100%"}}  /> }
                      containerElement = {<div style={{height: "100%"}}  /> }
                      mapElement = {<div style={{height: "100%"}}  /> }
                        />
                </div>
        )
}

export default CoffeeMap

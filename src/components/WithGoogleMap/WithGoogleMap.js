import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
    return (
    <GoogleMap 
        defaultZoom={12} 
        disableDefaultUI
        defaultCenter={{lat: 53.904541, lng: 27.561523 }}
        defaultOptions={{
            disableDefaultUI: true}} 
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap

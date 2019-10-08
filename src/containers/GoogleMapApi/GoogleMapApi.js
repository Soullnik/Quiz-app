import React, {Component} from 'react'
import WrappedMap from '../../components/WithGoogleMap/WithGoogleMap'

export default class GoogleMapApi extends Component {
    render() {
        return (
            <div style={{width: '100vw', height:'100vh'}}>
               <WrappedMap
               googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBfHn4FxCclRa-AeecFtRL4cy2TZT3RAj8`} 
               loadingElement={<div style={{ height: "100%"}} />}
               containerElement={<div style={{ height: "100%"}} />}
               mapElement={<div style={{ height: "100%"}} />}
               />
            </div>  
        )
    }
}
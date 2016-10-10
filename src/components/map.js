import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

export default class Map extends Component {
  render() {
    return(
      <section style={{display: "flex"}}>
        <GoogleMapLoader
          containerElement={
            <div style={ { height: '500px', width: '500px' } } />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => console.log(map)}
              defaultZoom={15}
              defaultCenter={{ lat: this.props.coords.coords.lat, lng: this.props.coords.coords.lng }}
              // onClick={this.handleMapClick}
            >
            <Marker
                position={{ lat: this.props.coords.coords.lat , lng: this.props.coords.coords.lng }}
                key='marker'
                icon='http://maps.google.com/mapfiles/ms/icons/blue.png'/>
          </GoogleMap>
          }
        />
      </section>
    )
  }
}

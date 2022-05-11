import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '92%',
  height: '170px'
};

export class GoogleMapLatLng extends Component {

 constructor(props, context) {
    super(props, context);
    this.state = {
      lat: props.location.lat,
      lng: props.location.lng,
      address: props.location.address,
      showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
    };
  }


  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location.lat !== this.state.lat) {
      this.setState({ lat: nextProps.location.lat });
      this.setState({ lng: nextProps.location.lng });
      this.setState({ address: nextProps.location.address });
    }
  }


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    if(this.state.lat)
    return (
      <div style={{ height:'250px', width:'100%', position: 'relative' }}>
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={
          {
            lat: this.state.lat,
            lng: this.state.lng,
          }
        }
      >
      <Marker
          onClick={this.onMarkerClick}
          name={this.state.address}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
        </div>
    );
  return (
      <h1>.....</h1>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDVR2fXPoEVoCNLIqagX5GQzna3feez4lI'
})(GoogleMapLatLng);
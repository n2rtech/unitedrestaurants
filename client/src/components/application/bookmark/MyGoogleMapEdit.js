// MyGoogleMapEdits.js
import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import styled from 'styled-components';

import AutocompleteListing from './AutocompleteListing';
import Marker from './Marker';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

class MyGoogleMapEdit extends Component {


    state = {
        mapApiLoaded: false,
        mapInstance: null,
        mapApi: null,
        geoCoder: null,
        places: [],
        center: [],
        zoom: 9,
        address: this.props.address||'',
        draggable: true,
        lat: this.props.latitude||0,
        lng: this.props.longitude||0
    };

    componentWillMount() {
        console.log('Recived props => ',this.props);
        this.setCurrentLocation();
    }


    onMarkerInteraction = (childKey, childProps, mouse) => {
        this.setState({
            draggable: false,
            lat: mouse.lat,
            lng: mouse.lng
        });
        this.props.onChangeLongitude(mouse.lng);   
        this.props.onChangeLatitude(mouse.lat);  
    }
    onMarkerInteractionMouseUp = (childKey, childProps, mouse) => {
        this.setState({ draggable: true });
        this._generateAddress();
    }

    _onChange = ({ center, zoom }) => {
        this.setState({
            center: center,
            zoom: zoom,
        });

    }

    _onClick = (value) => {
        this.setState({
            lat: value.lat,
            lng: value.lng
        });
    }

    apiHasLoaded = (map, maps) => {
        this.setState({
            mapApiLoaded: true,
            mapInstance: map,
            mapApi: maps,
        });

        this._generateAddress();
    };

    addPlace = (place) => {
        this.props.onChangeLongitude(place.geometry.location.lng());   
        this.props.onChangeLatitude(place.geometry.location.lat());  
        this.setState({
            places: [place],
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        });
        this._generateAddress()
    };

    _generateAddress() {
        const {
            mapApi
        } = this.state;

        const geocoder = new mapApi.Geocoder;

        geocoder.geocode({ 'location': { lat: this.state.lat, lng: this.state.lng } }, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.setState({ address: results[0].formatted_address });
                    this.props.onChangeAddress(results[0].formatted_address);
                } else {
                    window.alert('No results found');
                }
            } else {
                // window.alert('Geocoder failed due to: ' + status);
            }

        });
    }

    // Get Current Location Coordinates
    setCurrentLocation() {
        const latitude = this.props.latitude || 0;
        const longitude = this.props.longitude || 0;
        const address = this.props.address || '';
        this.setState({
            center: [parseFloat(latitude), parseFloat(longitude)],
            lat: parseFloat(latitude),
            lng: parseFloat(longitude),
        });
    }

    render() {
        const {
            places, mapApiLoaded, mapInstance, mapApi,
        } = this.state;


        return (
            <Wrapper>
                {mapApiLoaded && (
                    <div>
                        <AutocompleteListing map={mapInstance} mapApi={mapApi} addplace={this.addPlace} />
                    </div>
                )}
                <div style={{ height: '40vh', width: '100%', position: '' }}>
                <GoogleMapReact
                    center={this.state.center}
                    zoom={this.state.zoom}
                    draggable={this.state.draggable}
                    onChange={this._onChange}
                    onChildMouseDown={this.onMarkerInteraction}
                    onChildMouseUp={this.onMarkerInteractionMouseUp}
                    onChildMouseMove={this.onMarkerInteraction}
                    onChildClick={() => console.log('child click')}
                    onClick={this._onClick}
                    bootstrapURLKeys={{
                        key: 'AIzaSyDVR2fXPoEVoCNLIqagX5GQzna3feez4lI',
                        libraries: ['places', 'geometry'],
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
                >

                    <Marker
                        text={this.state.address}
                        lat={this.state.lat}
                        lng={this.state.lng}
                    />


                </GoogleMapReact>
                </div>


            </Wrapper >
        );
    }
}

export default MyGoogleMapEdit;
 
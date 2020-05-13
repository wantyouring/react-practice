import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MarkPlace from './mark_place';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// 현재 마킹 추가시 맵 동작 안하는 이슈 있어 보류.
// https://github.com/google-map-react/google-map-react/issues/677

class GoogleMap extends Component {
    render() {
        return (
            <div style={{ height: '500px', width:'500px'}}>
                <GoogleMapReact 
                    defaultZoom={this.props.zoom} 
                    defaultCenter={{lat: this.props.lat, lng: this.props.lng}}>
                    {/* <AnyReactComponent lat={this.props.lat} lng={this.props.lng} text={'A'}/> */}
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;
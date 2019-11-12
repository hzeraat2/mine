import React, { Component } from 'react';
import { Polygon } from 'react-native-maps';

export default class Mine extends Component {

    render() {
        return (
            <Polygon
                coordinates={this.props.area}
                strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                strokeColors={[
                    '#7F0000',
                    '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                    '#B24112',
                    '#E5845C',
                    '#238C23',
                    '#7F0000'
                ]}
                strokeWidth={6}
            />
        )
    }
}







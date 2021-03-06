import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView } from "expo";
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <MapView
        style={this.props.styles}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        
      />
    );
  }
}
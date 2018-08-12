import React, { Component } from "react";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Header
} from "native-base";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  InteractionManager,
} from 'react-native';
import MainHeader from "./src/components/MainHeader";
import MapComponent from "./src/components/MapComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    if (this.state.loading)
      return (
        <Container>
          <MainHeader />
          <View style={styles.container}>
            {this.state.loading ? (
              <MapComponent styles={styles.map}/>
            ) : (
              <Container>
              <Text>Loadinng...</Text>
            </Container>
            )}
          </View>
        </Container>
      );
    else
      return (
        <Container>
          <Text>Loadinng...</Text>
        </Container>
      );
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({
      ...this.state,
      loading: true
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    marginTop: 1.5,
    ...StyleSheet.absoluteFillObject
  }
});

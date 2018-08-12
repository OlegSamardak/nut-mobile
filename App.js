import React, {
  Component
} from "react";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text
} from "native-base";
import MainHeader from "./src/components/MainHeader";
import MapComponent from "./src/components/MapComponent";
export default class AnatomyExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  render() {
    if (this.state.fontsLoaded)
      return (
        <Container>
          <MainHeader />
          <Content>
            <MapComponent />
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
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
      fontsLoaded: true
    });
  }
}

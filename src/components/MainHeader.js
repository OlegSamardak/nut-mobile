import React, { Component } from "react";
import { Header, Left, Right, Icon, Title, Body, Button } from "native-base";

export default class MainHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}


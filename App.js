import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Helo, world!</Text>
        </View>
    );
  }
}

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
        <Image source={pic} style={{width: 400, height: 200}}/>
    );
  }
}

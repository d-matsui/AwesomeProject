import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Helo, world!</Text>
        </View>
    );
  }
}

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
        <Image source={pic} style={{width: 400, height: 200}}/>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
        <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
        </View>
    )
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
        <View>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        </View>
    )
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    // state object
    this.state = { isShowingText: true };
  }

  componentDidMount() {
    // Toggle the state every second
    setInterval(() => {
      // this.setState(() => (
      //   { isShowingText: !this.state.isShowingText }
      // ))
      this.setState((previousState) => (
        { isShowingText: !previousState.isShowingText }
      ))
    }, 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return (
        <Text>{this.props.text}</Text>
    );
  }
}

class BlinkApp extends Component {
  render() {
    return (
        <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default class LotsOfStyles extends Component {
  render() {
    return (
        <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>big blue, then red</Text>
        </View>
    )
  }
}


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import YouTube from 'react-native-youtube';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <YouTube
          apiKey="AIzaSyBeS7x_thM-ZgrlAx2FvlALHTDWqZKIvD4"
          videoId="HaftLnXnnlw"
          play={false}
          controls={1}
          fullscreen={false}
          onChangeState={e => this.setState({ status: e.state })}
          onProgress={e => this.setState({ duration: e.duration, currentTime: e.currentTime })}
          style={{ alignSelf: 'stretch', height: 300 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

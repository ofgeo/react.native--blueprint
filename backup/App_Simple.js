/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-primitives';
import {RootView, Touchable} from './views'
import Hello from './Hello'

export default class App extends Component {
  render() {
    return (
        <RootView style={styles.container}>
          <Touchable>
            <Text style={styles.welcome}>{Hello}</Text>
          </Touchable>
        </RootView>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

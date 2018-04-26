/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Button} from "react-native";
import {StyleSheet, View} from 'react-primitives';
import {Stack} from 'immutable'
import {RootView} from './views'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

export default class App extends Component {
  state = {
    components: Stack.of(ComponentA)
  };

  constructor(props) {
    super(props);
  }

  onNext = () => {
    this.setState(prevState => ({
      components: prevState.components.push(ComponentB)
    }));
  };

  onBack = () => {
    this.setState(prevState => ({
      components: prevState.components.pop()
    }));
  };

  render() {
    const {components} = this.state;

    const C = components.peek();
    return (
        <RootView style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <Button color="#841584" title={'Back'} onPress={this.onBack}/>
            <Button color="#841584" title={'Next'} onPress={this.onNext}/>
          </View>
          {C ? <C {...this.props} /> : null}
        </RootView>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
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

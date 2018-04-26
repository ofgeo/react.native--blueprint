/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component, Fragment} from 'react';
import {BackHandler, Button} from 'react-native';
import {StyleSheet} from 'react-primitives'
import {RootView} from './views'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import RootView from "../src/views/RootView";

type Props = {};

type State = {
  component: Component,
};
export default class App extends React.Component<Props, State> {
  state = {
    component: ComponentA
  };

  constructor(props) {
    super(props);

  }

  HardwareBackHandler = () => {
    this.setState({component: ComponentA});

    return true;
  };

  onPress = () => {
    this.setState({component: ComponentB});
  };

  render() {
    const {component} = this.state;
    // noinspection UnnecessaryLocalVariableJS
    const C = component;
    return (
        <RootView style={styles.container}>
          <Button title={'Press me'} onPress={this.onPress}/>
          <Fragment>
            {C ? <C {...this.props} title={'AAAA'} /> : null}
          </Fragment>
        </RootView>
    );

  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.HardwareBackHandler.bind(this));
  }
}

const styles = StyleSheet.create({
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

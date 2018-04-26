import React, {Component} from "react";
import {Text} from "react-primitives";
import Hello from './../Hello'

export default class extends Component {

  render() {
    return (
        <Text>{Hello}</Text>
    );
  }
}
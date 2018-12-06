/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Titulo from './src/components/titulo/Titulo';
import Display from './src/components/display/Display';

class App extends Component {
  render() {
    return (
      <View>
        <Titulo titulo={'React Native'}></Titulo>
        <Display ciudad={'Cartagena'} hora={'09:58 pm'} fecha={'14 Marzo 2018'}></Display>
      </View>
    );
  }
}
export default App;



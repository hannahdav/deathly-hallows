/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}

const Root = createStackNavigator(
    {
      Welcome: { screen: WelcomeScreen },
    },
    {
      initialRouteName: 'Welcome'
    }
);

const AppContainer = createAppContainer(Root);

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
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import SwipeScreen from './screens/SwipeScreen 2';
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
      Swipe: { screen: SwipeScreen }
    },
    {
      initialRouteName: 'Welcome'
    }
);

const AppContainer = createAppContainer(Root);
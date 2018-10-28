import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LandingComponent from './app/LandingComponent';

import {createStackNavigator} from 'react-navigation';
import WebViewComponent from './app/Components/WebViewComponent';
import EventDetails from './app/Components/EventDetails';

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator />      
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Landing: EventDetails,
  WebView: WebViewComponent,
  EventDetails: EventDetails
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

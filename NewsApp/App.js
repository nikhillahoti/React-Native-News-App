import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LandingComponent from './app/LandingComponent';

import {createStackNavigator} from 'react-navigation';
import WebViewComponent from './app/WebViewComponent';

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator />      
    );
  }
}

/*
<View style={styles.container}>
  <LandingComponent />
</View>
*/

const AppStackNavigator = createStackNavigator({
  Landing: LandingComponent,
  WebView: WebViewComponent
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

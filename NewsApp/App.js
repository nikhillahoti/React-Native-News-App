import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LandingComponent from './app/LandingComponent';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LandingComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

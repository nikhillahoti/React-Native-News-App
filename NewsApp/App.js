import React, {Component} from 'react';
import { Router, Scene} from 'react-native-router-flux';
import {createStore} from 'redux';

import LandingComponent from './app/LandingComponent';
import WebViewComponent from './app/Components/WebViewComponent';
import EventDetails from './app/Components/EventDetails';

const reducer = () => {
  
}

const store = createStore();

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="landing" component={LandingComponent} initial />
          <Scene key="eventDetails" component={EventDetails}/>
          <Scene key="WebView" component={WebViewComponent}/>
        </Scene>
      </Router>
    );
  }
}

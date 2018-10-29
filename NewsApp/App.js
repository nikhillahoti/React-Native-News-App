import React, {Component} from 'react';
import LandingComponent from './app/LandingComponent';


import WebViewComponent from './app/Components/WebViewComponent';
import EventDetails from './app/Components/EventDetails';
import { Router, Scene} from 'react-native-router-flux';

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
      //<AppStackNavigator />      
    );
  }
}

/*const AppStackNavigator = createStackNavigator({
  Landing: EventDetails,
  WebView: WebViewComponent,
  EventDetails: EventDetails
});
*/

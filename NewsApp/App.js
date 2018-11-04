import React, {Component} from 'react';
import { 
  Router,
  Scene,
  Actions
} from 'react-native-router-flux';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import LandingComponent from './app/LandingComponent';
import WebViewComponent from './app/Components/WebViewComponent';
import EventDetails from './app/Components/EventDetails';
import LogoHeader from './app/Components/LogoHeader';

const TabIcon = ({selected, title}) => {
  return (
    <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
  );
}

/*const initialState = {}

const reducer = (state=initialState) => {
  return state;
}

const store = createStore(reducer);
*/

export default class App extends Component {
  render() {
    //<Scene key="logoHeaderA" component={LogoHeader} />
    return (
      <View style={styles.container}>
        <LogoHeader />
        <Router>
          <Scene key="root"
            tabs
            hideNavBar={false}
            tabBarPosition="top"
          >
            <Scene key="OSU" title="OSU" icon={TabIcon} initial>
              <Scene key="landing" component={LandingComponent} initial />
              <Scene key="eventDetails" component={EventDetails}/>
            </Scene>
            <Scene key="HMM" icon={TabIcon}>
              <Scene key="WebView" component={WebViewComponent}/>  
            </Scene>
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
});

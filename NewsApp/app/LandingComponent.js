import React, {Component} from 'react';
import {
     Text,
     View,
     StyleSheet
} from 'react-native';

import LogoHeader from './Components/LogoHeader';
import Search from './Components/Search';

class LandingComponent extends Component {

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.main}>
                <LogoHeader style={styles.logo}/>
                <Search style={styles.searchBar} navigation={this.props.navigation}/>           
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        width: '100%'
    },
    logo: {
        height: '20%'
    },
    searchBar: {
        height: '80%'
    }
});

export default LandingComponent;
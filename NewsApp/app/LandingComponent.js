import React, {Component} from 'react';
import {Text,
     View,
     StyleSheet
} from 'react-native';

import LogoHeader from './Components/LogoHeader';
import SearchBar from './Components/SearchBar';

import Row from './Components/Row';

class LandingComponent extends Component {

    render(){
        return (
            <View style={styles.main}>
                <LogoHeader style={styles.logo}/>
                <SearchBar />

                <Row />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        flex: 1
    },
    logo:{
        //flex: 1
    },
    body: {
        flex: 1,
        width: '100%'
    }
});

export default LandingComponent;
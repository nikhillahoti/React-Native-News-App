import React from 'react';
import {Text,
     View,
     StyleSheet
} from 'react-native';

import LogoHeader from './Components/LogoHeader';
import Search from './Components/Search';

const LandingComponent = () => {
    return (
        <View style={styles.main}>
            <LogoHeader style={styles.logo}/>
            <Search style={styles.searchBar}/>           
        </View>
    );
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
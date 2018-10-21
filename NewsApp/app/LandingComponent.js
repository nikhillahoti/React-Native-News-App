import React, {Component} from 'react';
import {Text,
     View,
     StyleSheet
} from 'react-native';

import LogoHeader from './Components/LogoHeader';
import SearchBar from './Components/SearchBar';

import SingleRecord from './Components/SingleRecord';

class LandingComponent extends Component {

    render(){

        let record = {};
        record.title = "How the blockchain could break Big Tech’s hold on AI";
        record.url = "https://www.sfgate.com/business/article/How-the-blockchain-could-break-Big-Tech-s-hold-13322048.php";
        record.urlToImage = "https://s.hdnux.com/photos/76/32/44/16361775/5/rawImage.jpg"; 
        record.source = {};
        record.source.name = "Herald";
        record.time="51 minutes ago"; 

        //<SingleRecord record={record} style={styles.recordList}/>

        return (
            <View style={styles.main}>
                <LogoHeader style={styles.logo}/>
                <SearchBar style={styles.searchBar}/>           
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
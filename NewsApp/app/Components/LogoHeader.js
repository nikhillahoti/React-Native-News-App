
import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Logo from 'react-native-vector-icons/FontAwesome';

const LogoHeader = () => {
    return (
        <View style={styles.mainContainer}>
            
                <Logo name="newspaper-o" color="#ffffff"  size={20} />
                <Text style={styles.header}>Nearby Incidents</Text>
    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#5c5cd6',
        marginTop: 10
    },
    header: {
        fontSize: 14,
        fontWeight:'bold',
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 20,
    },
    mainContainer: {
        height: 40,
        marginTop: 30,
        backgroundColor: '#5c5cd6',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    }
});

export default LogoHeader;
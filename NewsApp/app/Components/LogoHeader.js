
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
            <View style={styles.container}>
                <Logo name="newspaper-o" color="#ffffff"  size={20} />
                <Text style={styles.header}>The Herald</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#3B5998',
        marginTop: 10
    },
    header: {
        fontSize: 14,
        fontWeight:'bold',
        color: '#ffffff',
        textAlign: 'center',
        paddingLeft: 20,
    },
    mainContainer: {
        height: 40,
        marginTop: 100,
        backgroundColor: '#3B5998',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    }
});

export default LogoHeader;
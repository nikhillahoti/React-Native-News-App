
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
                <Text style={styles.header}>News App</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B5998',
        width: '100%',
        marginTop: 15,
        textAlign: 'center'
    },
    header: {
        fontSize: 14,
        color: '#ffffff',
        paddingLeft: 20,
        fontWeight:'bold',
        textAlign: 'center'
    },
    mainContainer: {
        height: 50,
        marginTop: 30,
        backgroundColor: '#3B5998'
    }
});

export default LogoHeader;
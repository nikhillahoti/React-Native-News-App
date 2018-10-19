
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
                <Logo name="newspaper-o" color="#3B5998"  size={20} />
                <Text style={styles.header}>News App</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#99CCFF',
        width: '100%'
    },
    header: {
        fontSize: 14,
        color: '#3B5998',
        paddingLeft: 20,
        fontWeight:'bold',
        textAlign: 'center'
    },
    mainContainer: {
        height: 50,
        margin: 30
    }
});

export default LogoHeader;
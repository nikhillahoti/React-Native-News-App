
import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Logo from 'react-native-vector-icons/FontAwesome';

const LogoHeader = () => {
    return (
        <View>
            <View style={styles.container}>
                <Logo name="newspaper-o" color="#3B5998"  size={60} style={styles.logo}/>
                <Text style={styles.header}>News App</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        //justifyContent: 'center',
        margin: 20,
        alignItems: 'center',
        backgroundColor: '#F08080',
        width: '100%'
    },
    header: {
        fontSize: 18,
        color: '#3B5998',
        paddingLeft: 20,
        fontWeight:'bold',
        textAlign: 'center'
    },
    logo: {
        marginLeft: 20
    }
});

export default LogoHeader;

import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Logo from 'react-native-vector-icons/Entypo';

const LogoHeader = () => {
    return (
        <View style={styles.container}>
            <Logo name="newsletter" color="black"  size={60} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LogoHeader;
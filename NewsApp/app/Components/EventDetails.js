import React, {Component} from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

class EventDetails extends Component {
    
    render(){
        <View style={styles.container}>
            <Text>Details Page</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3128ba'
    }
});

export default EventDetails;
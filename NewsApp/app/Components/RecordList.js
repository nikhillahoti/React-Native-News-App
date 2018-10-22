import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

import SingleRecord from './SingleRecord';

class RecordList extends Component {
    render(){
        console.log(this.props.articles);
        let RecordListt = this.props.articles.map((rec, i) => {
            return (<View key={i}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('WebView', {URL: rec.url})}>
                            <SingleRecord record={rec} />
                        </TouchableOpacity>
                        <View style={styles.recView} />
                    </View>)
        });
        return (
            <ScrollView>
                {RecordListt}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    recView: {
        borderBottomColor: 'darkgrey',
        borderBottomWidth: 1,
        margin: 10,
        justifyContent: 'center'
    }
});

export default RecordList;
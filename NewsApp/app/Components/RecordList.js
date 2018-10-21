import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    StyleSheet,
    View
} from 'react-native';

import SingleRecord from './SingleRecord';

class RecordList extends Component {
    render(){
        let RecordListt = this.props.articles.map((rec, i) => <View key={i}><SingleRecord record={rec} /><View style={styles.recView} ></View></View>);
        return (
            <ScrollView>
                {RecordListt}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    recView: {
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        margin: 10,
        justifyContent: 'center'
    }
});

export default RecordList;
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
        let RecordListt = this.props.articles.map((rec, i) => <View style={styles.recView} key={i}><SingleRecord record={rec} /></View>);
        return (
            <ScrollView>
                {RecordListt}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    recView: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    }
});

export default RecordList;
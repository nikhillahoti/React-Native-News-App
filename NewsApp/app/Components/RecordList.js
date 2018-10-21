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
        let RecordListt = this.props.articles.map((rec, i) => <View style={styles.recView}><SingleRecord record={rec} key={i}/></View>);
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
        borderBottomWidth: 1
    }
});

export default RecordList;
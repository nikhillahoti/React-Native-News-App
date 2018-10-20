import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import SingleRecord from './SingleRecord';

class RecordList extends Component {
    render(){
        let RecordListt = this.props.articles.map((rec, i) => <SingleRecord record={rec} key={i}/>);
        console.log(RecordListt);
        return (
            <View>
                {RecordListt}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listView: {
        alignItems: 'center',
        padding: 10
    }
});

export default RecordList;
import React, {Component} from 'react';
import {
    View,
    ListView,
    Text
} from 'react-native';

class RecordList extends Component {
    
    fetchData = (searchText) => {
        let URL = "https://newsapi.org/v2/everything?q=bitcoin&from=2018-09-19&sortBy=publishedAt&apiKey=0779894fee914878a3e5353ecefd9e20";
        fetch(URL)
        .then((data) => {
            console.log(data);
            let records = JSON.parse(data._bodyText);
            console.log(records.articles);
        });
    }

    render(){



        let recordsList = "";


        return (
            <View>
                {records}
            </View>
        );
    }
}

export default RecordList;
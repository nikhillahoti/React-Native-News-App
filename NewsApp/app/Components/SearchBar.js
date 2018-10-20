import React, {Component} from 'react';
import {
    Text
    ,View
    ,TextInput
    ,StyleSheet
    ,TouchableOpacity
} from 'react-native';
import _ from 'lodash';

import Ionicons from 'react-native-vector-icons/Ionicons';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchText: ""
        }
    }

    fetchData = (searchText) => {
        let URL = "https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=0779894fee914878a3e5353ecefd9e20";
        return fetch(URL)
                .then((data) => {
                    let records = JSON.parse(data._bodyText);
                    return records.articles;
                });
    }

    getSearchResults = () => {
        let recordList = this.fetchData();
        this.setState({
            searchText: "Nikhil" + this.state.searchText
        })
    }

    render(){
        return (
            <View>
                <View style={styles.searchContainer}>
                    <TextInput 
                        editable = {true}
                        maxLength = {100}
                        style={styles.textInput}
                        onChangeText={(searchText) => this.setState({searchText})}
                    />
                    <TouchableOpacity onPress={this.getSearchResults}>
                        <Ionicons name="ios-search" color="black" size={25} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        padding: 20
    },
    icon: {
        alignSelf: 'flex-end'
    },
    textInput: {
        borderColor:'black',
        borderWidth: 1,
        width: '80%',
        marginRight: 20
    }
})

export default SearchBar;
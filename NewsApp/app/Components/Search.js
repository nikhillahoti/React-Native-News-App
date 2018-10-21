import React, {Component} from 'react';
import {
    Text
    ,View
    ,TextInput
    ,StyleSheet
    ,TouchableOpacity
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import RecordList from './RecordList';

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchText: "",
            records:  []
        }
    }

    // Returns a promise containing 20 news item relating to the search text or headlines 
    fetchData = (searchText) => {
        // This is the key needed for REST authentication with the newsapi.org website
        let apiKey = "0779894fee914878a3e5353ecefd9e20";

        // When the search text is blank, we search for headlines in the us region 
        // else we search for all the headlines related to the term for e.g. bitcoin.
        // All the results are always sorted by the published date
        let searchType = "everything?q=" + searchText;
        if(searchText == ""){
            searchType = "top-headlines?country=us"
        }
        let URL = "https://newsapi.org/v2/" + searchType + "&sortBy=publishedAt&apiKey=" + apiKey;
        console.log("The requested URL is --->");
        console.log(URL);
        return fetch(URL)
                .then((data) => {
                    // the records are returned as string so converting to JSON object and returning only the articles
                    let records = JSON.parse(data._bodyText);
                    return records.articles;
                });
    }

    getSearchResults = () => {
        // Getting the results for the searched text. If passed blank, we fetch the headlines in the us region
        let vari = this.state.searchText;
        console.log("THis is called");
        let recordList = this.fetchData(vari);
        recordList.then((articles) => {
            console.log(articles);
            this.setState({
                records: articles
            })
        });
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
                <View style={styles.viewSeparator} />
                <View style={styles.recordsContainer}>
                    <RecordList articles={this.state.records} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: 'red'
    },
    searchContainer: {
        flexDirection: 'row',
        padding: 10,
        height: '10%'
    },
    icon: {
        alignSelf: 'flex-end'
    },
    textInput: {
        borderColor:'silver',
        borderWidth: 1,
        width: '80%',
        height: 30,
        marginRight: 20
    },
    recordsContainer: {
        height: '90%'
    }
})

export default Search;
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
            records:  [],
            headlines: ""
        }

        // To load the headlines initially 
        this.getSearchResults("");
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
        let recordList = this.fetchData(this.state.searchText);
        recordList.then((articles) => {
            console.log(articles);

            let headline = "Top 20 headlines";
            if(this.state.searchText !== ""){
                headline = "Top 20 news about " + this.state.searchText;
            }

            this.setState({
                records: articles,
                headlines: headline
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
                    <TouchableOpacity onPress={this.getSearchResults} style={styles.searchIcon}>
                        <Ionicons name="ios-search" color="black" size={20} />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewSeparator} />
                <Text style={styles.titleText}>{this.state.headlines}</Text>
                <View style={styles.recordsContainer}>
                    <RecordList articles={this.state.records} navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#5c5cd6',
        marginBottom: 10
    },
    searchContainer: {
        flexDirection: 'row',
        padding: 10
    },
    searchIcon: {
        borderWidth: 1,
        borderColor: 'silver',
        height: 30,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%'
    },
    textInput: {
        borderColor:'silver',
        borderWidth: 1,
        width: '90%',
        height: 30,
        marginRight: 0
    },
    recordsContainer: {
        height: '90%'
    },
    titleText: {
        fontSize: 16,
        fontWeight:'bold',
        textAlign: 'left',
        color: '#5c5cd6',
        margin: 15
    }
})

export default Search;
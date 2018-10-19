import React, {Component} from 'react';
import {
    Text
    ,View
    ,TextInput
    ,StyleSheet
    ,TouchableOpacity
} from 'react-native';
import _ from 'lodash';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchText: ""
        }
    }

    getSearchResults = () => {
        this.setState({
            searchText: "Nikhil" + this.state.searchText
        })
    }

    render(){

        let name = "Kutte";
        if(this.state.searchText != ""){
            name = this.state.searchText;
        }

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
                        <FontAwesome name="search" color="black" size={20} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <Text>{name} !!!</Text> 
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
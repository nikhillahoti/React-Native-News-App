import React, {Component} from 'react';
import {View, Text, WebView} from 'react-native';

class WebViewComponent extends Component {

    render(){
        return (
            <View>
                <Text>{this.props.URL}</Text>
                <WebView 
                    source={{uri: this.props.URL}}
                />
            </View>
        );
    }
}

export default WebViewComponent;
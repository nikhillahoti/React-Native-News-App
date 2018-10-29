import React, {Component} from 'react';
import {View, WebView} from 'react-native';

class WebViewComponent extends Component {
    render(){
        return (
                <WebView 
                    source={{uri: this.props.URL}}
                />
        );
    }
}

export default WebViewComponent;
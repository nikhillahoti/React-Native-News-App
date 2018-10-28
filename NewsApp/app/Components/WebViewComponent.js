import React, {Component} from 'react';
import {View, WebView} from 'react-native';

class WebViewComponent extends Component {

    constructor(props){
        super(props);
    }

    render(){
        console.log("Inside the webview");
        console.log(this.props.navigation.state.params.URL);
        return (
                <WebView 
                    source={{uri: this.props.navigation.state.params.URL}}
                />
        );
    }
}

export default WebViewComponent;
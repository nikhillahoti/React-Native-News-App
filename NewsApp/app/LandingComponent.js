import React, {Component} from 'react';
import {Text, View} from 'react-native';

import LogoHeader from './Components/LogoHeader';
import Row from './Components/Row';

class LandingComponent extends Component {

    render(){
        return (
            <View>
                <LogoHeader />
                <Row />
            </View>
        );
    }
}

export default LandingComponent;
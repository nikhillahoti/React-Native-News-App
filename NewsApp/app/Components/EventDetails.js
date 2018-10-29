import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

class EventDetails extends Component {
    
    calculateTime = () => {
        let seconds = (Date.now() - Date.parse(this.props.record.publishedAt)) / 1000;
        var minutes = (seconds / 60).toFixed(2);

        if(minutes > 60){
            var hours = (minutes / 60).toFixed(2);
            if (hours > 24){
                let days = (hours / 24).toFixed(2);
                if(days > 1)
                    this.props.record.time = days + " days ago";
                else
                    this.props.record.time = days + " day ago";      
            }
            else
                this.props.record.time = hours + " hours ago";
        }
        else
        {
            console.log(hours);
            console.log(this.props.record.publishedAt);
            this.props.record.time = hours + " minutes ago";
        }
    }

    render(){

        const sampletext = "This is some sample text, This is some sample text, This is some sample text, This is some sample text";

        // If the image URL is not present, setting a default image as the image
        //let imageProps = (this.props.record.urlToImage === null) ? require('./../assets/images/default-image.jpg') : {uri: this.props.record.urlToImage};
        let imageProps = {uri: "https://zdnet4.cbsistatic.com/hub/i/r/2014/08/18/1e4b28b5-26c1-11e4-8c7f-00505685119a/thumbnail/770x578/8e50fb0264ffe72f0facd9d42562d477/1-9m-online-voting-platform-deal-for-nsw.jpg"};

        return (
            <View style={styles.container}>
                <Text style={styles.txttitle}>Is Bitcoin really the future now after seeing all the trends it has</Text>
                <Image 
                        source={imageProps}
                        style={styles.titleImage}
                />
                <View style={styles.contentContainer}>
                    <Text style={styles.txtcontents}>{sampletext}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.tchVisit}>
                        <Text style={styles.btnVisit}>Visit the page</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex'
    },
    txttitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5c5cd6',
        margin: 5
    },
    txtcontents: {
        textAlign: 'left',
        fontSize: 17,
        margin: 20
    },
    btnVisit: {
        color: 'white',
        textAlign: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        margin: 20
    },
    tchVisit: {
        backgroundColor: '#5c5cd6',
        width: '40%',
        height: 40
    },
    titleImage: {
        height: 250,
        width: 250,
        alignSelf: 'center',
        margin: 20
    }
});

export default EventDetails;
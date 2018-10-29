import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';


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
            this.props.record.time = hours + " minutes ago";
        
    }

    render(){

        // Removing the character length from the content string
        let content = this.props.record.content;
        this.props.record.content = content.substring(0, content.indexOf(" [+"));

        // If the image URL is not present, setting a default image as the image
        let imageProps = (this.props.record.urlToImage === null) ? require('./../assets/images/default-image.jpg') : {uri: this.props.record.urlToImage};
        //let imageProps = {uri: "https://bitcoinist.com/wp-content/uploads/2018/10/shutterstock_419990866-e1538805215269.jpg"};

        return (
            <View style={styles.container}>
                <Text style={styles.txttitle}>{this.props.record.title}</Text>
                <Image 
                        source={imageProps}
                        style={styles.titleImage}
                />
                <View style={styles.contentContainer}>
                    <Text style={styles.txtcontents}>{this.props.record.content}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.tchVisit}
                        onPress={() => Actions.WebView({URL: this.props.record.url})}
                    >
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
        fontSize: 17,
        fontWeight: 'bold',
        color: '#5c5cd6',
        margin: 5
    },
    txtcontents: {
        textAlign: 'left',
        fontSize: 15,
        margin: 20
    },
    btnVisit: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 8
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
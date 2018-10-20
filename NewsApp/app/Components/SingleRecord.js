import React, {Component} from 'react';
import {Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

class SingleRecord extends Component {


    checkRecordValue = () => {
        if(this.props.record.urlToImage === null){
            this.props.record.urlToImage = "http";
        }
    }

    calculateTime = () => {
        let seconds = (Date.now() - Date.parse(this.props.record.publishedAt)) / 1000;
        var minutes = seconds / 60;

        if(minutes > 60){
            var hours = minutes / 60;
            if (hours > 24){
                let days = hours / 24;
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
        if(this.props.record === undefined){
            return <View><Text>Bas re</Text></View>;
        }

        this.checkRecordValue();
        this.calculateTime();
        console.log("here ");
        console.log(this.props.record);
        console.log(this.props.record.source.name);
        return (
            <View style={styles.mainContainer}>
                <View style={styles.mainContentContainer}>
                    <Text style={styles.sourceName}>{this.props.record.source.name}</Text>
                    <Text style={styles.Content}>{this.props.record.title}</Text>
                    <Text style={styles.timeFont}>{this.props.record.time}</Text>
                    <Text> Crazy Text</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image 
                        source={{uri: this.props.record.urlToImage}}
                        style={{width: 80, height: 80}}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    mainContentContainer: {
        flex: 3,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 10
    },
    imageContainer: {
        flex: 1,
        textAlign: 'right'
    },
    sourceName: {
        fontSize: 12,
        color: 'grey'
    },
    Content: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 3 
    },
    timeFont: {
        fontSize: 10,
        marginTop: 20,
        color: 'grey'
    }
});

export default SingleRecord;
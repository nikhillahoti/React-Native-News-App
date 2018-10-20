import React, {Component} from 'react';
import {Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

class SingleRecord extends Component {

    render(){
    /*    let title = "How the blockchain could break Big Tech’s hold on AI";
        let url = "https://www.sfgate.com/business/article/How-the-blockchain-could-break-Big-Tech-s-hold-13322048.php";
        let imageUrl = "https://s.hdnux.com/photos/76/32/44/16361775/5/rawImage.jpg"; 
        let sourceName = "Herald";
        let time="51 minutes ago"; */
        
        return (
            <View style={styles.mainContainer}>
                <View style={styles.mainContentContainer}>
                    <Text style={styles.sourceName}>{this.props.record.source.name}</Text>
                    <Text style={styles.Content}>{this.props.record.title}</Text>
                    <Text style={styles.timeFont}>{this.props.record.time}</Text>
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
        flex: 4,
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
import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, Alert, TouchableOpacity } from 'react-native';
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace';

// let statusBarHeight = 30;

function Front_Interface({navigation}) {

    const pressHandler = () => {
        // const selection = Alert.prompt("Enter an animal", "or else.");
        // Alert.alert(selection);
        navigation.navigate('Left');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/top-camera.png')} />
            <Text style={styles.tempText}>Front Interface</Text>
            
            <TouchableOpacity onPress={pressHandler}>
                <Image style={styles.rightArrow}
                    source={require('../assets/temp_right_button.png')}
                />
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D12712',
        color: 'white',
        // paddingTop: statusBarHeight,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    tempText: {
        color: 'white',
        alignSelf: 'center',
        padding: 100,
    },
    rightArrow: {
        left: '70%',
        height: 100,
        width: 100,
        transform: [{scaleX: -1}]
    }
  });

export default Front_Interface;
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, Button, Alert } from 'react-native';

let statusBarHeight = 30;

function Right_Interface() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.topCamera} source={require('../assets/top-camera.png')} />
            <Text style={styles.testText}>Right Interface</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D12712',
        // paddingTop: statusBarHeight,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    testText: {
        color: 'white',
        alignSelf: 'center',
        padding: 100,
    },
    topCamera:{
        // width: 50,
        // height: 50,
        // resizeMode: 'stretch',
        // position: 'absolute',
        // alignSelf: 'flex-start',
    }
  });

export default Right_Interface;
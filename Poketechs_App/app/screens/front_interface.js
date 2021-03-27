import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, Button, Alert } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

let statusBarHeight = 30;

function Front_Interface() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.topCamera} source={require('../assets/top-camera.png')} />
            <Text style={styles.testText}>Front Interface</Text>
            <Front_To_Left_Button/>
        </SafeAreaView>
    );
}

function Front_To_Left_Button() {
    return (
        <View backgroundColor={'white'}>
            <Button
                title="Move To Left Interface"
                onPress={() => Alert.alert("Will Move To Left Interface")}
            />
        </View>
    )
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
    testText: {
        color: 'white',
        alignSelf: 'center',
        padding: 100,
    },
    topCamera: {
        // width: 50,
        // height: 50,
        // resizeMode: 'stretch',
        // position: 'absolute',
        // alignSelf: 'flex-start',
    }
  });

export default Front_Interface;
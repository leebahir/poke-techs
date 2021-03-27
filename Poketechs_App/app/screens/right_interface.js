import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native';

let statusBarHeight = 30;

// renders left interface component
function Right_Interface({ navigation }) {

    const frontPressHandler = () => {
        navigation.navigate('Front');
    }
    const leftPressHandler = () => {
        navigation.navigate('Left');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.topCamera} source={require('../assets/top-camera.png')} />
            <Text style={styles.testText}>Right Interface</Text>
            <View>
                <TouchableOpacity onPress={leftPressHandler}>
                    <Image style={styles.leftArrow}
                        source={require('../assets/temp_right_button.png')}
                    />
                </TouchableOpacity>

                // eventually, we may want a start over / go back to front button
                {/* <TouchableOpacity onPress={frontPressHandler}>
                    <Image style={styles.rightArrow}
                        source={require('../assets/temp_right_button.png')}
                    />
                </TouchableOpacity> */}
            </View>
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
    arrows: {
        flex: 1,
        position: 'absolute',
    },
    rightArrow: {
        left: '76%',
        height: 100,
        width: 100,
        transform: [{scaleX: -1}],
        position: 'absolute',
    },
    leftArrow: {
        height: 100,
        width: 100,
        position: 'absolute',
    }
  });

export default Right_Interface;
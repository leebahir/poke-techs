import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { arrowStyles } from "../styles/arrowStyles";

// let statusBarHeight = 30;

function Left_Interface({ navigation }) {
  const frontPressHandler = () => {
    console.log("test");
    navigation.navigate("Front");
  };
  const rightPressHandler = () => {
    console.log("test");
    navigation.navigate("Right");
  };

  return (
    <SafeAreaView style={arrowStyles.container}>
      <Image 
        source={require("../assets/top-camera.png")} 
      />
      <Text style={arrowStyles.testText}>
        Left Interface
      </Text>
      <View style={arrowStyles.doubleArrowRow}>
        <TouchableOpacity onPress={frontPressHandler}>
          <Image
            style={arrowStyles.leftArrow}
            source={require("../assets/temp_right_button.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={rightPressHandler}>
          <Image
            style={arrowStyles.rightArrow}
            source={require("../assets/temp_right_button.png")}
          />
        </TouchableOpacity>
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

export default Left_Interface;
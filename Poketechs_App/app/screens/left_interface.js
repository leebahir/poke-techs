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
    navigation.navigate("Front");
  };
  const rightPressHandler = () => {
    navigation.navigate("Right");
  };

  return (
    <SafeAreaView style={arrowStyles.container}>
      <Image source={require("../assets/top-camera.png")} />
      <Text style={arrowStyles.testText}>Left Interface</Text>
      <View style={arrowStyles.doubleArrows} >
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

export default Left_Interface;

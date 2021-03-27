import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import { arrowStyles } from "../styles/arrowStyles";

let statusBarHeight = 30;

// renders left interface component
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
      <Image source={require("../assets/top-camera.png")} />
      <Text style={arrowStyles.testText}>Left Interface</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
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

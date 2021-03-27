import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { arrowStyles } from "../styles/arrowStyles";

// let statusBarHeight = 30;

function Right_Interface({ navigation }) {
   
  const leftPressHandler = () => {
    navigation.navigate("Left");
  };

  return (
    <SafeAreaView style={arrowStyles.container}>
      <Image source={require("../assets/top-camera.png")} />
      <Text style={arrowStyles.testText}>Right Interface</Text>
      <View style={arrowStyles.arrowOnLeft}>
        <TouchableOpacity onPress={leftPressHandler}>
          <Image
            style={arrowStyles.leftArrow}
            source={require("../assets/temp_right_button.png")}
          />
        </TouchableOpacity>
        {/* eventually, we may want a start over / go back to front button */}
      </View>
    </SafeAreaView>
  );
}

export default Right_Interface;
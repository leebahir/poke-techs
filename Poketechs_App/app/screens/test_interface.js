import React from "react";
import {
  Text,
  SafeAreaView,
  Image,
} from "react-native";

import { arrowStyles } from "../styles/arrowStyles";

// let statusBarHeight = 30;

function Test_Interface({ navigation }) {

  return (
    <SafeAreaView style={arrowStyles.container}>
      <Image 
        source={require("../assets/top-camera.png")} 
      />
      <Text style={arrowStyles.testText}>
        Test Interface
      </Text>
    </SafeAreaView>
  );
}

export default Test_Interface;
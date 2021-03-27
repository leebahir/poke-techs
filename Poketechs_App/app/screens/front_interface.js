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

function Front_Interface({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Left");
  };

  return (
    <SafeAreaView style={arrowStyles.container}>
      <Image 
        source={require("../assets/top-camera.png")} 
      />
      <Text style={arrowStyles.testText}>
        Front Interface
      </Text>
      <View style={arrowStyles.arrowOnRight}>
        <TouchableOpacity onPress={pressHandler}>
          <Image
            style={arrowStyles.rightArrow}
            source={require("../assets/temp_right_button.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Front_Interface;
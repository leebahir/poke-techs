import { useLinkProps } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { endAsyncEvent } from "react-native/Libraries/Performance/Systrace";

import { arrowStyles } from "../styles/arrowStyles";

// let statusBarHeight = 30;

function Front_Interface({ navigation }) {
  const pressHandler = () => {
    // const selection = Alert.prompt("Enter an animal", "or else.");
    // Alert.alert(selection);
    console.log("test");
    navigation.navigate("Left");
  };

  return (
    <SafeAreaView style={arrowStyles.container}>
      <Image source={require("../assets/top-camera.png")} />
      <Text style={arrowStyles.testText}>Front Interface</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
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

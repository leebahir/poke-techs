import React from "react";
import { Text, SafeAreaView, View, Image, TouchableOpacity } from "react-native";

import { arrowStyles } from "../styles/arrowStyles";

import { getPerms } from "../backend/getPerms";
import UploadButton from "../backend/UploadButton";

function Front_Interface({ navigation }) {
  getPerms()

  const pressHandler = () => {
    navigation.navigate("Left", {test: "help me"});
  };

  return (
    <SafeAreaView style={arrowStyles.container}>
      <Image 
        source={require("../assets/top-camera.png")} 
      />
      <Text style={arrowStyles.testText}>
        Front Interface
      </Text>
      <Text style={arrowStyles.testText}>
        <UploadButton/>
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
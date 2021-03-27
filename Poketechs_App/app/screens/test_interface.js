import React from "react";
import {
  Text,
  SafeAreaView,
  Image,
} from "react-native";

import { arrowStyles } from "../styles/arrowStyles";
import { getPerms } from "../backend/getPerms";
import UploadButton from "../backend/UploadButton";

// let statusBarHeight = 30;

function Test_Interface({ navigation }) {
  getPerms()  

  return (
    <SafeAreaView style={arrowStyles.container}>
      <Image 
        source={require("../assets/top-camera.png")} 
      />
      <Text style={arrowStyles.testText}>
        <UploadButton/>
      </Text>
    </SafeAreaView>
  );
}

export default Test_Interface;
import React from "react";
import { Text, SafeAreaView, ImageBackground } from "react-native";

import { stationaryStyles } from "../styles/stationaryStyles";

import { getPerms } from "../backend/getPerms";
import UploadButton from "../backend/UploadButton";

function Front_Interface({ navigation }) {
  getPerms()

  return (
    <SafeAreaView style={stationaryStyles.container}>
      
      <ImageBackground style={stationaryStyles.container} source={require("../assets/front-background.png")}>

        <UploadButton/> 

      </ImageBackground>

    </SafeAreaView>
  );
}

export default Front_Interface;
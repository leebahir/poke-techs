import React from "react";
import { Text, SafeAreaView, View, Image, TouchableOpacity } from "react-native";

// import { touchableStyles } from "../styles/touchableStyles";
import { stationaryStyles } from "../styles/stationaryStyles";

import { getPerms } from "../backend/getPerms";
import UploadButton from "../backend/UploadButton";

function Front_Interface({ navigation }) {
  getPerms()

  return (
    <SafeAreaView style={stationaryStyles.container}>
      <Image 
        source={require("../assets/top-camera.png")} 
      />
      <Text style={stationaryStyles.plainText}>
        Front Interface
      </Text>
    
      <UploadButton/>
      
    </SafeAreaView>
  );
}

export default Front_Interface;
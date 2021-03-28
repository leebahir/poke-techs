import React from "react";
import { Text, SafeAreaView, View, Image, TouchableOpacity, StyleSheet } from "react-native";

import { touchableStyles } from "../styles/touchableStyles";
import { stationaryStyles } from "../styles/stationaryStyles";

function Left_Interface({ navigation, route }) {
  const imageB64 = route.params.img;
  const json = route.params.json; 
  console.log('JSON: ' + JSON.stringify(json));

  const frontPressHandler = () => {
    navigation.navigate("Front");
  };
  const rightPressHandler = () => {
    navigation.navigate("Right");
  };

  return (
    <SafeAreaView style={stationaryStyles.container}>
      <Image 
        source={require("../assets/top-camera.png")} 
      />
      
      <View style = {touchableStyles.parentContainer}>
        <View style = { [touchableStyles.imageContainer] }>
          <Image style = { [touchableStyles.centralImage, touchableStyles.border] } source = {{ uri : 'data:image/jpeg;base64,' + imageB64} }/>
        </View>
      </View>

      <View style={touchableStyles.doubleArrowRow}>
        <TouchableOpacity onPress={frontPressHandler}>
          <Image
            style={touchableStyles.leftArrow}
            source={require("../assets/temp_right_button.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={rightPressHandler}>
          <Image
            style={touchableStyles.rightArrow}
            source={require("../assets/temp_right_button.png")}
          />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

export default Left_Interface;
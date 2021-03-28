import React from 'react';
import { Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native';

import { touchableStyles } from "../styles/touchableStyles";
import { stationaryStyles } from "../styles/stationaryStyles";

function Right_Interface({ navigation }) {
   
  const leftPressHandler = () => {
    navigation.navigate("Left");
  };

  return (
    <SafeAreaView style={stationaryStyles.container}>
      <Image source={require("../assets/top-camera.png")} />
      <Text style={stationaryStyles.plainText}>Right Interface</Text>
      <View style={touchableStyles.arrowOnLeft}>
        <TouchableOpacity>
          <Image
            style={touchableStyles.leftArrow}
            source={require("../assets/temp_right_button.png")}
          />
        </TouchableOpacity>
        {/* eventually, we will want a start over / go back to front button */}
      </View>
    </SafeAreaView>
  );
}

export default Right_Interface;
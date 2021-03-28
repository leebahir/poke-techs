import React from "react";
import { Text, SafeAreaView, View, Image, TouchableOpacity, ImageBackground, Alert} from "react-native";

import { touchableStyles } from "../styles/touchableStyles";
import { stationaryStyles } from "../styles/stationaryStyles";

function Left_Interface({ navigation, route }) {
  const imageB64 = route.params.img;

  const frontPressHandler = () => {
    navigation.navigate("Front");
  };
  const rightPressHandler = () => {
    navigation.navigate("Right", {img: imageB64});
  };

  return (
    <SafeAreaView style={stationaryStyles.container}>
     
      <ImageBackground style={stationaryStyles.container} source={require("../assets/front-background.png")}>
        
        <View style = {touchableStyles.pageContainer}>

          <View style = {touchableStyles.contentContainer}>
              
              <View style = {touchableStyles.frontImageContainer}>
                  <Image style = { [touchableStyles.image, touchableStyles.border] } source = {{ uri : 'data:image/jpeg;base64,' + imageB64} }/>
              </View>

              <View style = {[touchableStyles.optionsContainer, touchableStyles.border]}>
                  <Text style = {touchableStyles.optionsTitle}>Tap the Best Match: </Text>
                  <TouchableOpacity onPress={ () => Alert.alert('youre 100% that bitch') }>
                      <Text style={[touchableStyles.optionsText, touchableStyles.selectedOption]}>  1. That Bitch    100%</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={ () => Alert.alert('rhino king') }>
                      <Text style={touchableStyles.optionsText}>  2. Rhino            90% </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={ () => Alert.alert('pee pee') }>
                      <Text style={touchableStyles.optionsText}>  3. poo poo          60% </Text>
                  </TouchableOpacity>
              </View>

          </View>

          <View style = {touchableStyles.leftArrowContainer}>
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

        </View>

      </ImageBackground>

    </SafeAreaView>
  );
}

export default Left_Interface;
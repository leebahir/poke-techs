import React from "react";
import { Text, SafeAreaView, View, Image, TouchableOpacity, ImageBackground, Alert} from "react-native";

import { touchableStyles } from "../styles/touchableStyles";
import { stationaryStyles } from "../styles/stationaryStyles";

function Left_Interface({ navigation, route }) {
  const imageB64 = route.params.img;
  const json = route.params.json;
  console.log('JSON: ' + JSON.stringify(json));

  const jsonDisplay = (json) => {
      if (json.payload) {
          var displayTxt = "";
          var payload = json.payload;
          console.log("BEFORE: " + JSON.stringify(payload));
          payload.sort((a, b) => (a.classification.score < b.classification.score) ? 1 : ((b.classification.score < a.classification.score) ? -1 : 0))
          console.log("AFTER: "+JSON.stringify(payload));
          for (i = 0; i < 3 && i < payload.length; i++) {
              displayTxt += "Name: " + JSON.stringify(payload[i].displayName) +
                  "\nScore: " + JSON.stringify(payload[i].classification.score) + '\n';
          }
          return (displayTxt);
      } else if (json.error) {
          if (JSON.stringify(json.error.message).length > 50) {
              return ("Error code: " + JSON.stringify(json.error.code) +
                  "\nMessage: " + JSON.stringify(json.error.message).substring(0, 50) + "...\""
              );
          } else {
              return ("Error code: " + JSON.stringify(json.error.code) +
                  "\nMessage: " + JSON.stringify(json.error.message)
              );
          }
      } else {
          return ("Sorry, we found no results for that. Try a different image? ");
      }
  }

  const frontPressHandler = () => {
    navigation.navigate("Front");
  };
  const rightPressHandler = () => {
    navigation.navigate("Right", {img: imageB64});
  };

  return (
    <SafeAreaView style={stationaryStyles.container}>
     
      <ImageBackground style={stationaryStyles.container} source={require("../assets/left-background.png")}>
        
        <View style = {touchableStyles.pageContainer}>

          <View style = {touchableStyles.contentContainer}>
              
              <View style = {touchableStyles.frontImageContainer}>
                  <Image style = { [touchableStyles.image, touchableStyles.border] } source = {{ uri : 'data:image/jpeg;base64,' + imageB64} }/>
              </View>

              {/* <View style = {[touchableStyles.optionsContainer, touchableStyles.border]}>
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
              </View> */}

              <View style={[touchableStyles.optionsContainer, touchableStyles.border]}>
                <View style={touchableStyles.optionsTitle}>
                    <TouchableOpacity onPress={() => { Alert.alert("uwu") }}>
                        <Text style={touchableStyles.plainText}>{ jsonDisplay(json)  }</Text>
                    </TouchableOpacity>
                </View>
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
import React from "react";
import { Text, SafeAreaView, View, Image, TouchableOpacity, ImageBackground, Alert} from "react-native";

import { touchableStyles } from "../styles/touchableStyles";
import { stationaryStyles } from "../styles/stationaryStyles";

function Left_Interface({ navigation, route }) {
  const imageB64 = route.params.img;
    const json = route.params.json;
    console.log('JSON: ' + JSON.stringify(json));
    var payload = json.payload;
    if (payload) {
        payload.sort((a, b) => (a.classification.score < b.classification.score) ? 1 : ((b.classification.score < a.classification.score) ? -1 : 0));
    }
    var selection = 1;

  const jsonDisplay = (boxNum) => {
      if (json.payload) {
          if (boxNum <= payload.length) {
              return (boxNum + ". " +
                  (payload[boxNum - 1].displayName + "                              ").slice(0,30) +
                  JSON.stringify(payload[boxNum - 1].classification.score).slice(2,4) + "%");
          }
      } else { //no predictions
          if (json.error) {
              if (boxNum == 1) {
                  return ("Error code: " + JSON.stringify(json.error.code));
              } else if (boxNum == 2) {
                  if (JSON.stringify(json.error.message).length > 50) {
                      return ("Message: " + JSON.stringify(json.error.message).substring(0, 50) + "...\"");
                  } else {
                      return ("Message: " + JSON.stringify(json.error.message));
                  }
             }
          } else {
              if (boxNum == 1) {
                  return ("Sorry, we found no results for that.");
              } else if (boxNum == 2) {
                  return ("         Try a different image?");
              }
          }
          
      }
    }

    const namePasser = (boxNum) => {
        if (payload && boxNum <= payload.length) {
            return (payload[boxNum - 1].displayName);
        } else { //no predictions
            return ("Please select a different name or image");
        }
    }

  const frontPressHandler = () => {
    navigation.navigate("Front");
  };
  const rightPressHandler = () => {
      console.log("FINAL SELECTION: "+selection);
      var name = namePasser(selection);
    navigation.navigate("Right", {img: imageB64, name: name});
    };

    const selectBox = (boxNum) => {
        console.log("Pressed Button #" + boxNum);
        let name = namePasser(boxNum);
        if (name != "Please select a different name or image") {
            Alert.alert("You chose: "+ name);
            selection = boxNum;
        }   
    }

  return (
    <SafeAreaView style={stationaryStyles.container}>
     
      <ImageBackground style={stationaryStyles.container} source={require("../assets/front-background.png")}>
        
        <View style = {touchableStyles.pageContainer}>

          <View style = {touchableStyles.contentContainer}>
              
              <View style = {touchableStyles.frontImageContainer}>
                  <Image style = { [touchableStyles.image, touchableStyles.border] } source = {{ uri : 'data:image/jpeg;base64,' + imageB64} }/>
              </View>

              { <View style = {[touchableStyles.optionsContainer, touchableStyles.border]}>
                  <Text style = {touchableStyles.optionsTitle}>Tap the Best Match: </Text>
                          <TouchableOpacity onPress={() => selectBox(1) }>
                              <Text style={[touchableStyles.optionsText, touchableStyles.selectedOption]}> { jsonDisplay(1) } </Text>
                  </TouchableOpacity>
                          <TouchableOpacity onPress={() => selectBox(2) }>
                              <Text style={touchableStyles.optionsText}>  {jsonDisplay(2)} </Text>
                  </TouchableOpacity>
                          <TouchableOpacity onPress={() => selectBox(3) }>
                              <Text style={touchableStyles.optionsText}>  {jsonDisplay(3)}  </Text>
                  </TouchableOpacity>
              </View> }

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
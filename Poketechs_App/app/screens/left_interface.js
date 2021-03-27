import React from "react";
import { Text, SafeAreaView, View, Image, TouchableOpacity, StyleSheet } from "react-native";

import { arrowStyles } from "../styles/arrowStyles";

function Left_Interface({ navigation, route }) {
  const imageB64 = route.params.img;

  const frontPressHandler = () => {
    navigation.navigate("Front");
  };
  const rightPressHandler = () => {
    navigation.navigate("Right");
  };

  return (
    <SafeAreaView style={arrowStyles.container}>
      <Image 
        source={require("../assets/top-camera.png")} 
      />
      <Text style={arrowStyles.testText}>
        Left Interface
      </Text>

      <View style = {styles.tempUploadButtons}>
        <Image style = {styles.tempImage} source = {{ uri : 'data:image/jpeg;base64,' + imageB64} }/>
      </View>

      <View style={arrowStyles.doubleArrowRow}>
        <TouchableOpacity onPress={frontPressHandler}>
          <Image
            style={arrowStyles.leftArrow}
            source={require("../assets/temp_right_button.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={rightPressHandler}>
          <Image
            style={arrowStyles.rightArrow}
            source={require("../assets/temp_right_button.png")}
          />
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}

//TODO: all these styles are temporary
const styles = StyleSheet.create({
  tempUploadText:{
      color: 'black',
      alignSelf: 'center'
  },
  tempUploadButtons:{
      alignSelf:'center',
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 5,
      borderRadius: 5
  },
  tempImage:{
      width: 250, 
      height: 250,
  },
})

export default Left_Interface;
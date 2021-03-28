import React from 'react';
import { Text, SafeAreaView, View, Image, TouchableOpacity, ImageBackground } from 'react-native';

import { touchableStyles } from "../styles/touchableStyles";
import { stationaryStyles } from "../styles/stationaryStyles";

function Right_Interface({ navigation, route }) {
    const imageB64 = route.params.img;

    const leftPressHandler = () => {
        navigation.navigate("Left");
    };

    return (
    <SafeAreaView style={stationaryStyles.container}> 
        
        <ImageBackground style={stationaryStyles.container} source={require("../assets/right-background.png")}>
        
            <View style = {touchableStyles.pageContainer}>

                <View style = {touchableStyles.contentContainer}>
                    
                    <View style = {touchableStyles.rightImageContainer}>
                        <Image style = { [touchableStyles.rightImage, touchableStyles.rightBorder] } source = {{ uri : 'data:image/jpeg;base64,' + imageB64} }/>
                    </View>

                    <View style = {[touchableStyles.resultsContainer, touchableStyles.rightBorder]}>
                        <Text> All Hail Meureum</Text>
                    </View>

                </View>

                <View style = {touchableStyles.leftArrowContainer}>
                    <TouchableOpacity onPress={leftPressHandler}>
                        <Image
                            style={touchableStyles.leftArrow}
                            source={require("../assets/temp_right_button.png")}
                        />
                    </TouchableOpacity>
                    
                </View>
                
            </View>

      </ImageBackground>

    </SafeAreaView>
  );
}

export default Right_Interface;
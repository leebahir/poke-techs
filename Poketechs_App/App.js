import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Front_Interface from "./app/screens/front_interface";
import Left_Interface from "./app/screens/left_interface";
import Right_Interface from "./app/screens/right_interface";

import { Alert } from 'react-native';
import * as Permissions from 'expo-permissions';

const Stack = createStackNavigator();

async function getPerms(){
  var { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  const status1 = status === 'granted'

  var { status } = await Permissions.askAsync(Permissions.CAMERA);
  const status2  = status === 'granted'

  if(!status1 && !status2){
    Alert.alert("This app needs access to at least one of your camera or camera roll!")
  }
  
}

export default function App() {
  getPerms();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Front" component={Front_Interface} />
        <Stack.Screen name="Left" component={Left_Interface} />
        <Stack.Screen name="Right" component={Right_Interface} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
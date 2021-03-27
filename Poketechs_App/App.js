import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Front_Interface from "./app/screens/front_interface";
import Left_Interface from "./app/screens/left_interface";
import Right_Interface from "./app/screens/right_interface";

const Stack = createStackNavigator();

export default function App() {
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
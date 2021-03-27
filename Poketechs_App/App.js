import React from 'react';
import Navigator from './app/navigations/frontStack'
import * as Permissions from 'expo-permissions';
import { Alert } from 'react-native';

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
    <Navigator/>
  );
}
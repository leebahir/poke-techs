import { Alert } from 'react-native';
import * as Permissions from 'expo-permissions';

export async function getPerms(){
    var { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    const status1 = status === 'granted'
  
    var { status } = await Permissions.askAsync(Permissions.CAMERA);
    const status2  = status === 'granted'
  
    if(!status1 && !status2){
      Alert.alert("This app needs access to at least one of your camera or camera roll!")
    }
  }

import React from "react";
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from "react-native";

import { useState } from 'react';import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';


export default function UploadButton(){ 
    const navigation = useNavigation();

    //Creates 3 states/hooks for the element
    //NOTE: imageB64 (should be able to be) used with sending the prediction request
    const [imageURI, setImageURI] = useState(null)
    const [imageB64, setImageB64] = useState(null)
    const [imageChosen, setImageChosen] = useState(false)
    const options = {
        base64: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true
    }

    const requestFromCameraRoll = async() =>{
        try{
            const response = await ImagePicker.launchImageLibraryAsync( options )
            if (response.cancelled === true) {
                //TODO: These alerts may or may not be used, but we can decide that later
                console.log('User cancelled photo picker');
                Alert.alert('You did not select any image');
            } else {
                setImageURI(response.uri);
                setImageB64(response.base64);
                setImageChosen(true);
        }}catch (e){
            //The only error i think is if the photo library is inaccessible
            console.log(e)
            Alert.alert("Unable to access photo library")
        }
    }

    //Currently untested as of now, but i assume it works the same as gettin an image from the photo library
    const takePicture = async() => {
        try{
            const response = await ImagePicker.launchCameraAsync( options )
            if (response.cancelled === true) {
                console.log('User cancelled camera');
                Alert.alert('No picture taken.');
            } else {
                setImageURI(response.uri);
                setImageB64(response.base64);
                setImageChosen(true);
        }}catch (e){
            //The only error i think is if the camera is inaccessible
            console.log(e)
            Alert.alert("Unable to access camera")
        }
    }

    if (imageChosen){
        const img = {img: imageB64};
        
        //NOTE: I think theres a better way of cascading these styles but it probably doesnt matter because things are gonna move around anyway
        // The main purpose of the code here is proof of concept that uploading images works. The functions and returns can just be moved around as needed
        return (<View>
                    <View style = {styles.tempUploadButtons}>
                        <TouchableOpacity onPress ={ () => {requestFromCameraRoll() } }>
                            <Text style={styles.tempUploadText}>Upload New Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => { takePicture() } }>
                            <Text style={styles.tempUploadText}>Take a Different Photo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.tempUploadButtons}>
                        <Image style = {styles.tempImage} source = {{ uri : 'data:image/jpeg;base64,' + imageB64} }/>
                    </View>
                    <View style = {styles.tempUploadButtons}>
                        <TouchableOpacity onPress = { () => { navigation.navigate('Left', img) }}>
                            <Text style={styles.tempUploadText}>Analyze!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                )
    }else{
        return (<View style = {styles.tempUploadButtons}>  
                    <TouchableOpacity onPress={ () => {requestFromCameraRoll() } }>
                            <Text style={styles.tempUploadText}>Upload Image From Camera Roll</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => {takePicture() } }>
                        <Text style={styles.tempUploadText}>Take a Photo and Upload</Text>
                    </TouchableOpacity>
                </View>
                )
    }
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
});
  

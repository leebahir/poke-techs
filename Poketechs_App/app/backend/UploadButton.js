import React from "react";
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from "react-native";

import { useState } from 'react';import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

import { touchableStyles } from '../styles/touchableStyles.js'

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
        return (<View style = {touchableStyles.uploadContainer}>
                    <View style = {touchableStyles.uploadButton}>
                        <TouchableOpacity onPress ={ () => {requestFromCameraRoll() } }>
                            <Text style={touchableStyles.uploadText}>Upload New Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => { takePicture() } }>
                            <Text style={touchableStyles.uploadText}>Take a Different Photo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {touchableStyles.frontImageContainer}>
                        <Image style = {touchableStyles.frontImage} source = {{ uri : 'data:image/jpeg;base64,' + imageB64} }/>
                    </View>
                    <View style = {touchableStyles.uploadButton}>
                        <TouchableOpacity onPress = { () => { navigation.navigate('Left', img) }}>
                            <Text style={touchableStyles.uploadText}>Analyze!</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={touchableStyles.arrowOnRight}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Left', img) }}>
                        <Image
                            style={touchableStyles.rightArrow}
                            source={require("../assets/temp_right_button.png")}
                        />
                        </TouchableOpacity>
                    </View>
                </View>
                )
    }else{
        return (
                <View style = {touchableStyles.uploadContainer}>
                    <View style = {touchableStyles.uploadButton}>  
                        <TouchableOpacity onPress={ () => {requestFromCameraRoll() } }>
                                <Text style={touchableStyles.uploadText}>Upload Image From Camera Roll</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => {takePicture() } }>
                            <Text style={touchableStyles.uploadText}>Take a Photo and Upload</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                )
    }
};
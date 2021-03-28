import React from "react";
import { Text, View, Image, Alert, TouchableOpacity } from "react-native";

import { useState } from 'react'; import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { predict } from '../backend/submit_func';

import { touchableStyles } from '../styles/touchableStyles.js'

export default function UploadButton() {
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

    const requestFromCameraRoll = async () => {
        try {
            const response = await ImagePicker.launchImageLibraryAsync(options)
            if (response.cancelled === true) {
                //TODO: These alerts may or may not be used, but we can decide that later
                console.log('User cancelled photo picker');
                Alert.alert('You did not select any image');
            } else {
                setImageURI(response.uri);
                setImageB64(response.base64);
                setImageChosen(true);
            }
        } catch (e) {
            //The only error i think is if the photo library is inaccessible
            console.log(e)
            Alert.alert("Unable to access photo library")
        }
    }

    //Currently untested as of now, but i assume it works the same as gettin an image from the photo library
    const takePicture = async () => {
        try {
            const response = await ImagePicker.launchCameraAsync(options)
            if (response.cancelled === true) {
                console.log('User cancelled camera');
                Alert.alert('No picture taken.');
            } else {
                setImageURI(response.uri);
                setImageB64(response.base64);
                setImageChosen(true);
            }
        } catch (e) {
            //The only error i think is if the camera is inaccessible
            console.log(e)
            Alert.alert("Unable to access camera")
        }
    }

    if (imageChosen){
        const predictAndNavigate = async (imgB64) => {
            const img = { img: imgB64 };
            const responseJson = await predict(imgB64);
            console.log('PREDICTION1: ' + JSON.stringify(img.json));
            img.json = responseJson;
            console.log('PREDICTION2: ' + JSON.stringify(img.json));
            navigation.navigate('Left', img);
        }
           return (
                <View style = {touchableStyles.pageContainer}>

                    <View style = {touchableStyles.contentContainer}>
                        
                        <View style = {touchableStyles.frontImageContainer}>
                            <Image style = { [touchableStyles.image, touchableStyles.border] } source = {{ uri : 'data:image/jpeg;base64,' + imageB64} }/>
                        </View>

                        <View style = {[touchableStyles.uploadContainer, touchableStyles.border]}>
                            <TouchableOpacity onPress={ () => {requestFromCameraRoll() } }>
                                    <Text style={touchableStyles.uploadText}>▶ Upload New Image</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => {takePicture() } }>
                                <Text style={touchableStyles.uploadText}>▶ Take a Different Photo</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style = {touchableStyles.frontArrowContainer}>
                        <TouchableOpacity onPress={() => { predictAndNavigate(imageB64) }}>
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
                <View style = {touchableStyles.pageContainer}>

                    <View style = {touchableStyles.contentContainer}>

                        <View style = {touchableStyles.frontImageContainer}>
                            <Image style = {[touchableStyles.image, touchableStyles.border]} source = { require("../assets/starting-image.png") }/>
                        </View>

                        <View style = {[touchableStyles.uploadContainer, touchableStyles.border]}>
                            <TouchableOpacity onPress={ () => {requestFromCameraRoll() } }>
                                    <Text style={touchableStyles.uploadText}>▶ Upload Image From Camera Roll</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => {takePicture() } }>
                                <Text style={touchableStyles.uploadText}>▶ Take a Photo and Upload</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style = {touchableStyles.frontArrowContainer}> 
                    {/* this is a spacing placeholder, don't remove */} 
                    </View>
                    
                </View>
        )
    }
};
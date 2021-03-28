import { StyleSheet } from "react-native";

export const touchableStyles = StyleSheet.create({
    // NAVIGATION ARROWS
    rightArrow: {
        height: 100,
        width: 100,
        transform: [{ scaleX: -1 }],
    },
    leftArrow: {
        height: 100,
        width: 100,
    },
    arrowOnRight: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    arrowOnLeft: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    doubleArrowRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    // IMAGE UPLOAD STYLE    
    uploadContainer: {
        alignItems: 'center',
    },
    uploadButton:{
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
    uploadText:{
        color: 'black',
        fontSize: 20,
    },
    
    frontImage: {
        width: 250, 
        height: 250,
    },
    frontImageContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 5,
    },

    displayImageContainer: {
        alignItems: 'center',
    },
    leftImage: {
        width: 250, 
        height: 250,
    },
    leftImageContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 5,
    },
});

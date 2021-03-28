import { StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

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
        justifyContent: "flex-end",
        alignSelf: "flex-end"
    },
    arrowOnLeft: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "flex-start"
    },
    doubleArrowRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    // MAIN INTERFACE STYLING
    border:{
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: 5,
        margin: 25,
        backgroundColor: 'white',
    },
    parentContainer: {
        flex: 1,
    },
    imageContainer: {
        width: 300,
        height: 300,
        alignSelf: 'center'
    },
    textBox: {
        backgroundColor: 'white',
        backfaceVisibility: 'hidden',
        shadowColor: 'white'
    },
    centralImage: { 
        width: 292, 
        height: 292,
    },
    plainText:{
        color: 'black',
        fontSize: 20,
        margin: 5
    },
    displayImageContainer: {
        alignItems: 'center',
    },
});

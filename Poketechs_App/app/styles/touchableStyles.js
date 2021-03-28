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
        flex: 1,
        justifyContent: "flex-end",
        alignSelf: "flex-end"
    },
    arrowOnLeft: {
        flex: 1,
        justifyContent: "flex-start",
        alignSelf: "flex-end"
    },
    doubleArrowRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'flex-end'
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
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    imageContainer: {
        flex: 3,
        alignSelf: 'center'
    },
    textBox: {
        flex: 1,
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

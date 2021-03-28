import { StyleSheet } from "react-native";

export const touchableStyles = StyleSheet.create({
    // NAVIGATION ARROWS
    rightArrow: {
        height: 60,
        width: 60,
        transform: [{ scaleX: -1 }],
    },
    leftArrow: {
        height: 60,
        width: 60,
    },
    
    // ALL INTERFACE STYLING
    image: {
        height: 340,
        width: 340,
    },  
    border:{
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 5,
    },
    pageContainer: {
        // backgroundColor: 'pink',
        flex: 1,
        marginTop: 110,
        justifyContent: 'center',
    },
    contentContainer: {
        // backgroundColor: 'black',
        alignSelf: 'center',
        width: 350,
        height: 550,
        alignItems: 'center'
    },

    // FRONT INTERFACE STYLING
    frontImageContainer:{
        // backgroundColor: 'red',
        marginTop: 30,
        height: 340,
        width: 340,
    },
    uploadContainer:{
        // backgroundColor: 'white
        backgroundColor: '#AAF683',
        height: 100,
        width: 340,
        marginTop: 40,
        justifyContent: 'center',
    },
    uploadText: {
        // color: 'black',
        color: '#0A122A',
        fontSize: 20,
        marginBottom: 8,
        marginTop: 8,
        marginLeft: 10,
    },
    frontArrowContainer: {
        // backgroundColor: 'yellow',
        marginTop: 40,
        marginRight: 10,
        alignItems: 'flex-end',
        height: 60,
    },

    // LEFT INTERFACE STYLING
    leftArrowContainer: {
        // backgroundColor: 'yellow',
        marginTop: 40,
        marginRight: 10,
        marginLeft: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'flex-end',
        height: 60,
    },
    optionsContainer: {
        // backgroundColor: 'white',
        backgroundColor: '#AAF683',
        height: 170,
        width: 340,
        marginTop: 20,
        justifyContent: 'center',
    },
    optionsTitle: {
        color: 'black',
        fontSize: 25,
        paddingLeft: 10,
        alignSelf: 'center',
    },
    optionsText: {
        color: 'black',
        fontSize: 20,
        marginTop: 10,
        paddingLeft: 10,
    },
    selectedOption: {
        backgroundColor: 'yellow',
    },

    // RIGHT INTERFACE STYLING
    resultsContainer: {
        backgroundColor: 'white',
        height: 180,
        width: 270,
        marginTop: 20,
        justifyContent: 'center',
    },
    rightImage: {
        height: 252,
        width: 252,
        alignSelf: 'center',
        marginTop: 62,
        marginLeft: 4,
    },  
    rightBorder:{
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
    },
    rightImageContainer:{
        // backgroundColor: 'black',
        marginTop: 30,
        height: 340,
        width: 340,
    },


// ============= OLD =======================

    // arrowOnRight: {
    //     justifyContent: "flex-end",
    //     alignSelf: "flex-end"
    // },
    // arrowOnLeft: {
    //     justifyContent: "flex-start",
    //     alignSelf: "flex-end"
    // },
    // doubleArrowRow: {
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignItems: 'flex-end'
    // },

    // parentContainer: {
    //     alignSelf: 'center',
    //     flex: 1,
    //     flexDirection: 'column',
    //     justifyContent: 'center'
    // },
    // test:{
    //     flex: 1,
    // },
    // imageContainer: {
    //     alignSelf: 'center'
    // },
    // textBox: {
    //     backgroundColor: 'white',
    //     backfaceVisibility: 'hidden',
    //     shadowColor: 'white'
    // },
    // centralImage: { 
    //     width: 292, 
    //     height: 292,
    // },
    // plainText:{
    //     color: 'black',
    //     fontSize: 20,
    //     margin: 5
    // },
    // displayImageContainer: {
    //     alignItems: 'center',
    // },
   // border:{
    //     borderColor: 'black',
    //     borderWidth: 4,
    //     borderRadius: 5,
    //     margin: 25,
    //     backgroundColor: 'white',
    // },
});
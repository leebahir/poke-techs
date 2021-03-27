import { StyleSheet } from "react-native";

export const arrowStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D12712",
    // paddingTop: statusBarHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  testText: {
    color: "white",
    alignSelf: "center",
    padding: 100,
  },
  arrows: {
    flex: 1,
    position: "absolute",
  },
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
  }
});

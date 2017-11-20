import { StyleSheet } from "react-native";
import { ApplicationStyles, Fonts } from "../../Themes/";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 48
  },
  buttonText: {
    ...Fonts.style.h5,
    fontWeight: "bold"
  },

  buttonStyle: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 48
  }
});

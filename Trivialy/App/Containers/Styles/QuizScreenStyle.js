import { StyleSheet } from "react-native";
import { ApplicationStyles, Fonts } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  quizHeader: {
    fontSize: Fonts.size.h3,
    fontFamily: Fonts.type.bold,
    textAlign: "center",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    marginVertical: 25
  },
  quizCard: {
    flex: 1,
    borderWidth: 5,
    borderRadius: 5,
    padding: 30,
    marginTop: "25%",
    alignItems: "center",
    backgroundColor: "white"
  },
  questionText: {
    ...Fonts.style.normal
  },
  cardCaptionText: {
    textAlign: "center",
    marginTop: 5
  }
});

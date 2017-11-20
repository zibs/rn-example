import {
  StackNavigator
} from "react-navigation";
import ResultsScreen from "../Containers/ResultsScreen";
import QuizScreen from "../Containers/QuizScreen";
import LaunchScreen from "../Containers/LaunchScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ResultsScreen: {
    screen: ResultsScreen
  },
  QuizScreen: {
    screen: QuizScreen,
    // navigationOptions: ({
    //   navigation
    // }) => ({
    //   title: "The Quiz"
    // })

  },
  LaunchScreen: {
    screen: LaunchScreen,
    // navigationOptions: ({
    //   navigation
    // }) => ({
    //   header: null
    // })
  }
}, {
  // Default config for all screens
  headerMode: "none",
  initialRouteName: "LaunchScreen",
  navigationOptions: {
    headerStyle: styles.header
  }
});

export default PrimaryNav;

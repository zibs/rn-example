import React from "react";
import { View, Text } from "react-native";
import styles from "../Containers/Styles/QuizScreenStyle";

export default class QuizCard extends React.PureComponent {
  render() {
    const { question } = this.props;
    return (
      <View style={styles.quizCard}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
    );
  }
}

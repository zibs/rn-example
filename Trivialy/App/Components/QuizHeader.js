import React from 'react';

import { View, Text } from 'react-native';
import styles from '../Containers/Styles/QuizScreenStyle';

export default class QuizHeader extends React.PureComponent {
  render() {
    const { text } = this.props;
    return (
      <View>
        <Text style={styles.quizHeader}>{text}</Text>
      </View>
    );
  }
}

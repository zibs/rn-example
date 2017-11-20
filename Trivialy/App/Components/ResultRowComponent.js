import React from 'react';
import { View, Text } from 'react-native';
import { Fonts, Colors } from '../Themes';
import styles from './Styles/ResultRowComponentStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ResultRowComponent extends React.PureComponent {
  render() {
    const { answeredCorrect, decodedQuestion } = this.props;
    return (
      <View style={styles.rowWrap}>
        <Icon
          name={answeredCorrect ? 'check-circle' : 'do-not-disturb'}
          style={styles.icon}
          size={Fonts.size.h4}
          color={answeredCorrect ? Colors.true : Colors.false}
        />
        <Text style={styles.rowText}>{decodedQuestion}</Text>
      </View>
    );
  }
}

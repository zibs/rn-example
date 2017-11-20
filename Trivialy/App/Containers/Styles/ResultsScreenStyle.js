import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  padding: { paddingHorizontal: 15 },
  paddingBottom: {
    paddingBottom: Metrics.section
  }
});

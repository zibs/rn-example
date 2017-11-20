import { StyleSheet } from 'react-native';
import { Fonts } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  rowText: { ...Fonts.style.normal, flexWrap: 'wrap', flex: 1 },
  icon: {
    marginRight: 5
  },
  rowWrap: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 }
});

import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../Themes/';

export default StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginVertical: 24,
    borderRadius: 4,
    borderWidth: 5,
    borderColor: Colors.success
  },
  buttonText: {
    ...Fonts.style.normal,
    fontFamily: Fonts.type.bold
  }
});

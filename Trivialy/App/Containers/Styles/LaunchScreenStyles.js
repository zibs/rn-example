import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, Fonts, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,  
  container: {
    paddingBottom: Metrics.baseMargin,
    marginHorizontal: 15
  },
  centerScreen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    ...Fonts.style.h4,
    fontFamily: Fonts.type.bold,
    textAlign: 'center',
    marginBottom: 5
  },
  secondaryText: {
    textAlign: 'center',
    ...Fonts.style.h5,
    marginVertical: 15
  },
  true: {
    fontFamily: Fonts.type.bold,
    color: Colors.true
  },
  false: {
    fontFamily: Fonts.type.bold,
    color: Colors.false
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  }
});

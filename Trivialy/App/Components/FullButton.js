import React from "react";
import { Text, View } from "react-native";
import { Fonts } from "../Themes";
import Touchable from "react-native-platform-touchable";
import styles from "./Styles/FullButtonStyle";

export default class FullButton extends React.PureComponent {
  render() {
    const { onPress, title } = this.props;
    return (
      <Touchable
        onPress={onPress}
        style={styles.button}
        background={Touchable.Ripple("blue")}
      >
        <Text style={styles.buttonText}>
          {title}
        </Text>
      </Touchable>
    );
  }
}

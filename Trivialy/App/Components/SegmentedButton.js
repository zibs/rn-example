import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./Styles/SegmentedButtonStyle";
import { Colors } from "../Themes/";
import Touchable from "react-native-platform-touchable";

export default class SegmentedButton extends React.PureComponent {
  render() {
    const { handlePress } = this.props;
    return (
      <View style={styles.container}>
        <Touchable
          onPress={() => handlePress(false)}
          style={[styles.buttonStyle, { borderColor: Colors.false }]}
        >
          <Text style={styles.buttonText}>False</Text>
        </Touchable>
        <Touchable
          onPress={() => handlePress(true)}
          style={[styles.buttonStyle, { borderColor: Colors.true }]}
        >
          <Text style={styles.buttonText}>True</Text>
        </Touchable>
      </View>
    );
  }
}

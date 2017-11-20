import React, { Component } from 'react';
import { ScrollView, Text, Image, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Images, Colors } from '../Themes';
import FullButton from '../Components/FullButton';
import styles from './Styles/LaunchScreenStyles';
import { path } from 'ramda';

class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    // let's bind our functions here instead of using arrow functions within component
    this._handleBeginQuiz = this._handleBeginQuiz.bind(this);
  }
  render() {
    const { numberOfQuestions, attemptingToLoadData } = this.props;
    // if we aren't loading data, render the app!
    if (!attemptingToLoadData) {
      return (
        <View style={styles.mainContainer}>
          <ScrollView style={styles.container}>
            <View style={styles.centered}>
              <Image source={Images.trivia} style={styles.logo} />
              <Text style={styles.mainText}>Welcome to the Trivia Challenge!</Text>
              <Text style={styles.secondaryText}>
                {`You will be presented with ${numberOfQuestions} `}
                <Text style={styles.true}>True</Text> or <Text style={styles.false}>False</Text>{' '}
                questions.
              </Text>
              <Text style={styles.secondaryText}>Can you score 100%?</Text>
            </View>
          </ScrollView>
          <FullButton title="BEGIN" onPress={this._handleBeginQuiz} />
        </View>
      );
    } else {
      return (
        <View style={[styles.mainContainer, styles.centerScreen]}>
          <ActivityIndicator size="large" color={Colors.success} />
        </View>
      );
    }
  }

  _handleBeginQuiz() {
    this.props.navigation.navigate('QuizScreen');
  }
}

const mapStateToProps = state => {
  const quizReducer = state.quiz;
  return {
    numberOfQuestions: path(['questions', 'length'], quizReducer),
    attemptingToLoadData: quizReducer.fetching
  };
};

export default connect(mapStateToProps)(LaunchScreen);

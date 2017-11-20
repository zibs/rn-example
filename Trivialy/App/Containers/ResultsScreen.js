import React, { Component } from 'react';
import { ScrollView, Text, View, FlatList } from 'react-native';
import { NavigationActions } from 'react-navigation';
// Redux
import { connect } from 'react-redux';
import QuizActions from '../Redux/QuizRedux';
// Transforms
import { calculateQuizScore, questionAnsweredCorrectly } from '../Transforms/QuizTransforms';
import { decode } from 'ent';
// Styles
import styles from './Styles/ResultsScreenStyle';
// Components
import QuizHeader from '../Components/QuizHeader';
import FullButton from '../Components/FullButton';
import ResultRowComponent from '../Components/ResultRowComponent';

class ResultsScreen extends Component {
  constructor(props) {
    super(props);
    this._handlePressPlayAgain = this._handlePressPlayAgain.bind(this);
  }

  static navigationOptions = {
    gesturesEnabled: false
  }

  render() {
    const { questions, score } = this.props;
    return (
      <View style={[styles.mainContainer, styles.padding]}>
        <QuizHeader text={`You scored ${score} out of ${questions.length}`} />
        <ScrollView style={styles.container}>
          <FlatList
            data={questions}
            renderItem={this._renderRow}
            keyExtractor={(item, index) => index}
            style={styles.paddingBottom}
          />
        </ScrollView>
        <FullButton title="PLAY AGAIN" onPress={this._handlePressPlayAgain} />
      </View>
    );
  }
  _renderRow({ item }) {
    let answeredCorrect = questionAnsweredCorrectly(item);
    return (
      <ResultRowComponent
        answeredCorrect={answeredCorrect}
        decodedQuestion={decode(item.question)}
      />
    );
  }

  _handlePressPlayAgain() {
    this.props.resetRouteStack();
    this.props.resetQuiz();
  }
}

const mapStateToProps = state => {
  const quizReducer = state.quiz;
  return {
    questions: quizReducer.questions,
    score: calculateQuizScore(quizReducer.questions)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetQuiz: () => dispatch(QuizActions.resetQuiz()),
    resetRouteStack: () =>
      dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'LaunchScreen' })]
        })
      )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen);

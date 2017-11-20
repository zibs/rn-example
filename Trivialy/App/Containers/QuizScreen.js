// Platform
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
// Redux
import { connect } from 'react-redux';
import QuizActions from '../Redux/QuizRedux';
// Transforms
import { prettifyQuizQuestion } from '../Transforms/QuizTransforms';
// Styles
import styles from './Styles/QuizScreenStyle';
// Components
import SegmentedButton from '../Components/SegmentedButton';
import QuizHeader from '../Components/QuizHeader';
import QuizCard from '../Components/QuizCard';

class QuizScreen extends React.Component {
  static navigationOptions = {
    gesturesEnabled: false
  };
  render() {
    const { currentQuestion: { category, question }, questions, currentQuestionIndex } = this.props;
    return (
      <View style={[styles.mainContainer, { marginHorizontal: 15 }]}>
        <ScrollView style={styles.container}>
          <QuizHeader text={category} />
          <QuizCard question={question} />
          <Text style={styles.cardCaptionText}>{` ${currentQuestionIndex +
            1} of ${questions.length}`}</Text>
        </ScrollView>
        <SegmentedButton handlePress={this._handleAnswerPress} />
      </View>
    );
  }

  _handleAnswerPress = answer => {
    const { numberOfQuestions, currentQuestionIndex, answerQuestion, navigation } = this.props;
    if (numberOfQuestions - 1 === currentQuestionIndex) {
      navigation.navigate('ResultsScreen');
    }
    answerQuestion(answer);
  };
}

const mapStateToProps = state => {
  const quizReducer = state.quiz;
  // lookup current question by current question index with questions array
  return {
    // we need to run a transform on the question to clean up for presentation
    currentQuestion: prettifyQuizQuestion(quizReducer.questions[quizReducer.currentQuestionIndex]),
    questions: quizReducer.questions,
    numberOfQuestions: quizReducer.questions.length,
    currentQuestionIndex: quizReducer.currentQuestionIndex
  };
};

const mapDispatchToProps = dispatch => {
  return {
    answerQuestion: answer => dispatch(QuizActions.answerQuestion(answer))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);

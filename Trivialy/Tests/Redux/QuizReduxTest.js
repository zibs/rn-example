import QuizActions, { reducer, INITIAL_STATE } from '../../App/Redux/QuizRedux';
import { quizApiResponse, finishQuizState } from '../../App/Fixtures/QuizFixtures';
import { prop } from 'ramda';

// let's test the individual reducers

test('request', () => {
  const state = reducer(INITIAL_STATE, QuizActions.fetchQuizRequest());

  expect(state.fetching).toBe(true);
  expect(state.questions).toBeNull();
});

test('success', () => {
  const state = reducer(INITIAL_STATE, QuizActions.fetchQuizSuccess(quizApiResponse));

  expect(state.fetching).toBe(false);
  expect(state.questions).toEqual(quizApiResponse.results);
  expect(state.error).toBeNull();
  expect(state.currentQuestionIndex).toEqual(0);
});

test('failure', () => {
  const state = reducer(INITIAL_STATE, QuizActions.fetchQuizFailure());

  expect(state.fetching).toBe(false);
  expect(state.questions).toBeNull();
  expect(state.error).toBe(true);
});

test('answerQuestion', () => {
  const answerTrue = true;
  const answerFalse = false;
  // build reducer with questions
  const state = reducer(INITIAL_STATE, QuizActions.fetchQuizSuccess(quizApiResponse));
  const stateWithOneAnswer = reducer(state, QuizActions.answerQuestion(answerTrue));
  //answer first question - bumps the question index, merges answer into question object
  expect(stateWithOneAnswer.currentQuestionIndex).toEqual(1);
  expect(stateWithOneAnswer.questions[0].answered).toBe(true);

  // answer another question
  const stateWithTwoAnswers = reducer(stateWithOneAnswer, QuizActions.answerQuestion(answerFalse));
  expect(stateWithTwoAnswers.currentQuestionIndex).toEqual(2);
  expect(stateWithTwoAnswers.questions[1].answered).toBe(false);
});

test('resetQuiz', () => {
  const state = reducer(finishQuizState, QuizActions.resetQuiz());
  // resets index
  expect(state.currentQuestionIndex).toEqual(0);
  // removes answered key for each question
  let answeredQuestions = state.questions.filter((question, index) => prop('answered', question));
  expect(answeredQuestions.length).toEqual(0);
});

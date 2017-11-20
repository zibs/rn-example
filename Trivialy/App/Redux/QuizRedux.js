import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { merge, omit } from 'ramda';
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchQuizRequest: null,
  fetchQuizSuccess: ['payload'],
  fetchQuizFailure: null,
  resetQuiz: null,
  answerQuestion: ['answer']
});

export const QuizTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  questions: null,
  currentQuestionIndex: 0,
  error: null
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, action) => state.merge({ fetching: true, questions: null });

// successful api lookup - stores quiz questions
export const success = (state, action) => {
  const { payload } = action;
  return state.merge({
    fetching: false,
    error: null,
    questions: payload.results
  });
};

// Something went wrong somewhere.
export const failure = state => state.merge({ fetching: false, error: true, questions: null });

// Updates the current question with the answer given
// merges the user's answer into the question object and updates the current question index
export const answerQuestion = (state, action) =>
  state.merge({
    questions: state.questions.map(
      (question, index) =>
        index === state.currentQuestionIndex
          ? merge(question, { answered: action.answer })
          : question
    ),
    // we don't want to bump the index beyond the amount of questions
    currentQuestionIndex:
      state.currentQuestionIndex === state.questions.length - 1
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1
  });

export const resetQuiz = state =>
  state.merge({
    questions: state.questions.map((question, index) => omit(['answered'], question)),
    currentQuestionIndex: 0
  });
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_QUIZ_REQUEST]: request,
  [Types.FETCH_QUIZ_SUCCESS]: success,
  [Types.FETCH_QUIZ_FAILURE]: failure,
  [Types.RESET_QUIZ]: resetQuiz,
  [Types.ANSWER_QUESTION]: answerQuestion
});

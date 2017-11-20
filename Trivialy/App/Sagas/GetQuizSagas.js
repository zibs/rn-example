import { call, put } from 'redux-saga/effects';
import QuizActions from '../Redux/QuizRedux';

export function* getQuizSaga(api, action) {
  // make the call to the api
  const response = yield call(api.getQuizData);
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(QuizActions.fetchQuizSuccess(response.data));
  } else {
    yield put(QuizActions.fetchQuizFailure());
  }
}

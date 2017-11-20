import { put, call } from 'redux-saga/effects';
import { getQuizSaga } from '../../App/Sagas/GetQuizSagas';
import QuizActions from '../../App/Redux/QuizRedux';
import { quizApiResponse, finishQuizState } from '../../App/Fixtures/QuizFixtures';
import mockApi from '../../App/Fixtures/MockApi';

const stepper = fn => mock => fn.next(mock).value;

test('successfully calls the api and sends the quiz data to the reducer', () => {
  const step = stepper(getQuizSaga(mockApi));
  expect(step()).toEqual(call(mockApi.getQuizData));
  expect(
    step({
      ok: true,
      data: quizApiResponse
    })
  ).toEqual(put(QuizActions.fetchQuizSuccess(quizApiResponse)));
});

test('api call fails and we dispatch the failure action to the reducer', () => {
  const step = stepper(getQuizSaga(mockApi));
  expect(step()).toEqual(call(mockApi.getQuizData));
  expect(
    step({
      ok: false
    })
  ).toEqual(put(QuizActions.fetchQuizFailure()));
});

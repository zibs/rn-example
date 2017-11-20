import { takeLatest, all } from 'redux-saga/effects';
import API from '../Services/Api';
/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux';
import { QuizTypes } from '../Redux/QuizRedux';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { getQuizSaga } from './GetQuizSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(QuizTypes.FETCH_QUIZ_REQUEST, getQuizSaga, api)
  ]);
}

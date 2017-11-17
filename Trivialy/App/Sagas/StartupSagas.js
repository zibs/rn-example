import { put } from "redux-saga/effects";
import QuizActions from "../Redux/QuizRedux";

// process STARTUP actions
export function* startup(action) {
  yield put(QuizActions.fetchQuizRequest());
}

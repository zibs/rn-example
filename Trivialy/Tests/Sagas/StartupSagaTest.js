import { select, put } from "redux-saga/effects";
import { startup } from "../../App/Sagas/StartupSagas";
import QuizActions from "../../App/Redux/QuizRedux";

const stepper = fn => mock => fn.next(mock).value;

test("watches for the right action", () => {
  const step = stepper(startup());
  expect(step()).toEqual(put(QuizActions.fetchQuizRequest()));
});

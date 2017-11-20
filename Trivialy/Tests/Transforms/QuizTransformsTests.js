import { singleQuestion, finishedQuizQuestions } from '../../App/Fixtures/QuizFixtures';
import { prettifyQuizQuestion, calculateQuizScore } from '../../App/Transforms/QuizTransforms';

test('It decodes and prettifies quiz questions - removing html encodings', () => {
  // this question comes back from the api as:
  // 'This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.'
  let prettifiedQuestion = prettifyQuizQuestion(singleQuestion);
  expect(prettifiedQuestion.question).toEqual(
    'This is the correct spelling of "Supercalifragilisticexpialidocious".'
  );
});

test('It correctly calculates the quiz score from redux state', () => {
  let score = calculateQuizScore(finishedQuizQuestions);
  expect(score).toEqual(8);
});

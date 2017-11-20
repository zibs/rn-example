import { merge, propEq, filter, length } from 'ramda';
// the data comes back with it's html encodings, we'll want to decode these with ent
import { decode } from 'ent';

export const prettifyQuizQuestion = (currentQuestion = null) => {
  if (currentQuestion) {
    // since we're working with immutable data, let's merge our prettified question once it's properly decoded.
    return merge(currentQuestion, {
      question: decode(currentQuestion.question)
    });
  }
};

// it looks like the api returns true/false as strings so we need to convert to boolean
const convertStringToBoolean = string => string.toLowerCase() === 'true';

export const questionAnsweredCorrectly = question =>
  question.answered === convertStringToBoolean(question.correct_answer);

export const calculateQuizScore = questions => {
  let numberOfCorrectAnswers = length(
    filter(question => questionAnsweredCorrectly(question), questions)
  );
  return numberOfCorrectAnswers;
};

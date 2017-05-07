import * as Questions from '../../data/questions';
import * as Answers from '../../data/answers';
import * as _ from 'lodash';

export const questions = (number) => {
  if (number > Questions.default.length) {
      return Questions.default;
  }
  return _.sampleSize(Questions.default, number);
};

export const answers = () => {
    return Answers.default
};
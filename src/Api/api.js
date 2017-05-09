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

export const calculateQuestions = (payload) => {
    return payload.map((q) => {
        let result = { questionId: q.questionId,
                                submittedAnswer: q.answer,
                                isCorrect: false,
                                correctAnswer: '' }
        const check = _.find(Answers.default, { 'id': q.questionId });
        if(check.answer === q.answer) {
            result.isCorrect = true;
        }
        result.correctAnswer = check.answer;        
        return result;
    });
};
export const getAnswer = (questionsArray) => {
    return questionsArray.map((q) => {
        let result = { questionId: q.id, correctAnswer: '', question: '' }
        const answer = _.find(Answers.default, { 'id': q.id });
        let questionObject = getQuestionById(q.id);
        result.question = questionObject[0];
        result.correctAnswer = answer.answer;        
        return result;
    });
};


export const getQuestionById = (id) => {
    return Questions.default.filter((q) => {
        return q.id === id;
    });
};

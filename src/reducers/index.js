import { combineReducers } from 'redux';
import questions from './questionsReducer';
import answers from './answersReducer';
import quiz from './quizReducer';

const rootReducer = combineReducers({
  questions,
  answers,
  quiz
});

export default rootReducer;

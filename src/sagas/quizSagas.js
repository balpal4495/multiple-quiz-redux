import { put, call } from 'redux-saga/effects';
import { questions, answers } from '../Api/api';
import * as types from '../constants/actionTypes';


export default function* getQuizSaga({ payload }) {
  try {    
    const questionsData = yield call(questions, payload);
    const answersData = yield call(answers, payload);
    console.log('get quiz questionsData::', questionsData)
    console.log('get quiz answersData::', answersData)
    yield [
      put({ type: types.GET_QUESTIONS_SUCCESS, questions: questionsData }),
      put({ type: types.GET_ANSWERS_SUCCESS, answers: answersData })
    ];
  } catch (error) {
  console.log('do i error  ?::', error)
    
    yield put({ type: 'GET_DATA_FAILURE', error });
  }
}

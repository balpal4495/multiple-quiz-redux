import { takeLatest } from 'redux-saga/effects';
import getQuizSaga from './quizSagas';
import * as types from '../constants/actionTypes';

export default function* getQuiz() {
  yield* takeLatest(types.GET_QUIZ, getQuizSaga);
}


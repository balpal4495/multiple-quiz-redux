import { takeLatest } from 'redux-saga';
import getQuizSaga from './quizSagas';
import * as types from '../constants/actionTypes';

export default function* getQuizWatcher() {
  yield* takeLatest(types.GET_QUESTIONS, getQuizSaga);
}


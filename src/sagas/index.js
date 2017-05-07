import { fork } from 'redux-saga/effects';
import getQuiz from './watchers';

export default function* startForman() {
  yield fork(getQuiz);
}

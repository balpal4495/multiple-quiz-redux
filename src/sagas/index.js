import { fork } from 'redux-saga/effects';
import getQuizWatcher from './watchers';

export default function* startForman() {
  yield fork(getQuizWatcher);
}

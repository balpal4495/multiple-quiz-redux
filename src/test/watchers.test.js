import expect from 'expect';
import { fork, take } from 'redux-saga/effects';
import getQuizSaga from '../sagas/quizSagas';
import getQuizWatcher from '../sagas/watchers';

describe('Test for questions sagas', () => {

  describe('Test for getQuizWatcher', () => {
    it('should call getQuizSaga', () => {
      const gen = getQuizWatcher();
      const action = { type: 'GET_QUESTIONS' };
      expect(gen.next().value).toEqual(take('GET_QUESTIONS'));
      expect(gen.next(action).value).toEqual(fork(getQuizSaga, action));
    });
  });
});

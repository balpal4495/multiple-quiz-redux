import expect from 'expect';
import { fork } from 'redux-saga/effects';
import startForeman from '../sagas';
import getQuizWatcher from '../sagas/watchers';


describe('Test startForeman saga', () => {
  it('should yield array watchers saga', () => {
    expect(startForeman().next().value).toEqual(fork(getQuizWatcher));
  });
});

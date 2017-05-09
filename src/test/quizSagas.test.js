import expect from 'expect';
import { put, call } from 'redux-saga/effects';
import getQuizSaga from '../sagas/quizSagas';
import { questions, answers } from '../Api/api';


describe('Test for getQuizSaga', () => {
  const payload = 3;
  const gen = getQuizSaga({ payload });

  it('should call questions API function', () => {
    expect(gen.next(payload).value).toEqual(call(questions, payload));
  });

  it('should call answers API function ', () => {
    expect(gen.next(payload).value).toEqual(call(answers, payload));
  });

  it('should yield array of objects', () => {
    const questions = [];
    expect(gen.next(questions).value.length).toEqual(2);
  });

  it('should dispatch failure effect', () => {
    const error = 'error';
    expect(gen.throw(error).value).toEqual(put({ type: 'GET_DATA_FAILURE', error }));
  });
});

import React from 'react';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { getQuiz } from '../actions/quizActions';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);

describe('Test store', () => {
  it('should return dispatch action to the api', () => {
    const store = mockStore({});
    const expectedValue = {
      type: 'GET_QUESTIONS',
      payload: 3
    };
    store.dispatch(getQuiz(3));
    expect(store.getActions()).toEqual([expectedValue]);
  });
});

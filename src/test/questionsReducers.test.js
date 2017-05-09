import expect from 'expect';
import questionsReducer from '../reducers/questionsReducer';
import * as types from '../constants/actionTypes';


describe('Test for question Reducers', () => {
  const initialState = {};

  it('should return the initial state', () => {
    expect(questionsReducer(undefined, [])).toEqual([]);
  });
});

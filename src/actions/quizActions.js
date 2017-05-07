import * as types from '../constants/actionTypes';

export const getQuiz = (payload) => ({
  type: types.GET_QUESTIONS,
  payload
});
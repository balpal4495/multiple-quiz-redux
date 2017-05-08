import * as types from '../constants/actionTypes';

export const getQuiz = (payload) => ({
  type: types.GET_QUESTIONS,
  payload
});

export const submitQuestion = (payload) => ({
  type: types.SUBMIT_QUESTION,
  payload
});

export const updateQuestion = (payload) => ({
  type: types.UPDATE_QUESTION,
  payload
});
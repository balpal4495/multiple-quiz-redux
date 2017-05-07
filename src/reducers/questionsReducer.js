import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.questions, action) {
  switch (action.type) {
    case types.GET_QUESTIONS_SUCCESS:
      return [...state, action.questions];
    default:
      return state;
  }
}

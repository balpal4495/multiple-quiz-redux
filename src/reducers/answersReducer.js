import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.answers, action) {
  switch (action.type) {
    case types.GET_ANSWERS_SUCCESS:
      return [...state, action.answers];
    default:
      return state;
  }
}

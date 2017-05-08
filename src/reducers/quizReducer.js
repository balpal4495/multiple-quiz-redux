import initialState from './initialState';
import * as types from '../constants/actionTypes';
import * as _ from 'lodash';

export default function (state = initialState.quiz, action) {
  switch (action.type) {
    case types.SUBMIT_QUESTION:
        return [ ...state,  action.payload ];
    case types.UPDATE_QUESTION:     
        const updatedItems = state.map(question => {
        if(question.questionId === action.payload.questionId){
            return { ...question, ...action.payload }
        }
            return question
        })
        return updatedItems
    default:
      return state;
  }
}
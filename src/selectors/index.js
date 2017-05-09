import { createSelector } from 'reselect';
import { calculateQuestions, getAnswer } from '../Api/api';


const getCurrentQuiz = (quiz) => quiz
const getCurrentQuestions = (questions) => questions

export const getQuizScore = createSelector(
  [ getCurrentQuiz ],
  (quiz) => {
      let quizScore = calculateQuestions(quiz);
      return quizScore
  }
)

export const getQuestionsAnswers = createSelector(
  [ getCurrentQuestions ],
  (questions) => {
      if(questions && questions.length > 0) {
          let questionsAnswers = getAnswer(questions);
          return questionsAnswers;
      } else {
          return 0;
      }
  }
)
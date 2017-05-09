import { createSelector } from 'reselect';
import { calculateQuestions, getAnswer } from '../Api/api';


const getCurrentQuiz = (quiz) => quiz
const getCurrentQuestions = (questions) => questions

export const getQuizScore = createSelector(
  [ getCurrentQuiz ],
  (quiz) => {
      let quizScore = calculateQuestions(quiz);
      console.log('quizScore::', quizScore);
      return quizScore
  }
)

export const getQuestionsAnswers = createSelector(
  [ getCurrentQuestions ],
  (questions) => {
      console.log('getCurrentQuestions::', questions)
      if(questions && questions.length > 0) {
          let questionsAnswers = getAnswer(questions);
          console.log('questionsAnswers::', questionsAnswers);
          return questionsAnswers;
      } else {
          return 0;
      }
    //   return questions
  }
)
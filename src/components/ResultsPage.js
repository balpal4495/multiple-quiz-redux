import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import * as _ from 'lodash';

const ResultsPage = ({ questions, score, answers }) => {
  const getQuestionByID = (id) => {
      return questions.filter((q) => {
        return q.id === id
      })
  }
  const renderQuestion = (id) => {
      const questionObject = getQuestionByID(id)
      console.log('questionObject::', questionObject)
      return (
          <div>
            {questionObject[0].question}
            <ul>
            {questionObject[0].answerOptions.map((option) => {
                return <li key={option.body}>{option.body}</li>
            })}
            </ul>
          </div>
      )
  }
    const renderResult = (id) => {
      const resultObject = score.filter((r) => {
          return r.questionId === id;
      })

      console.log('resultObject::', resultObject)
      return (<p>you answered with {resultObject[0].submittedAnswer} correct answer is {resultObject[0].correctAnswer}</p>)
  }
  console.log('questions::s', questions)
  console.log('score::s', score)
  console.log('answers::s', answers)
  return (
    <div className="results">
        {score.map(a => (
            <div key={a.questionId}>
               <div>
                  {console.log('a::', a)}
                  {renderQuestion(a.questionId)}
                  {renderResult(a.questionId)}
                  <br/>
              </div>
            </div>
        ))}
    </div>
  )
}

export default ResultsPage;

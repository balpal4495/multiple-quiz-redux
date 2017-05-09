import React from 'react';
import './ResultsPage.css';

const ResultsPage = ({ questions, score, answers }) => {
  const renderQuestion = (id) => {
      const questionObject = questions.filter((q) => {
        return q.id === id
      })
      return (
          <div className="dialog-results">
            <span className="question">{questionObject[0].question} </span>
            <ul className="dialog-results-list">
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
      let textString;
      if(resultObject[0].isCorrect) {
          textString = <p><span className="correct">Correct! </span> 
                       you answered with {resultObject[0].submittedAnswer}</p>
      } else {
          textString = <p><span className="incorrect">Incorrect! </span> 
                           you answered with {resultObject[0].submittedAnswer} correct answer 
                           is {resultObject[0].correctAnswer} </p>
      }
      return textString
  }

  const renderScore = () => {
      const total = score.filter((s) => {
          return s.isCorrect === true;
      })
      return <p>You scored {total.length} out of {questions.length} </p>
  }

  return (
    <div className="results">
        {score.map(a => (
            <div key={a.questionId}>
               <div>
                  {renderQuestion(a.questionId)}
                  {renderResult(a.questionId)}
                  <br/>
              </div>
            </div>
        ))}
        {renderScore()}
    </div>
  )
}

export default ResultsPage;

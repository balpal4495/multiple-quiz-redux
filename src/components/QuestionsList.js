import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import './QuestionList.css';

class QuestionsList extends Component {
  render() {
    const { questions, onHandleSelectAnswer } = this.props
    return (
      <div className="questionsList">
        <h3>Quiz App</h3>
        {questions.map(question => (
            <div key={question.id}>
               <div>
                  <p className="question">{question.question}</p>
                  <RadioButtonGroup name={question.question} defaultSelected="not_light" >
                      {question.answerOptions.map(option => (
                          <RadioButton
                              onClick={onHandleSelectAnswer.bind(this, question, option)}
                              key={option.body}
                              value={option.value}
                              label={option.body}
                          />
                      ))}
                  </RadioButtonGroup>        
                  <br/>
              </div>
            </div>
        ))}
      </div>
    );
  }
}

export default QuestionsList;

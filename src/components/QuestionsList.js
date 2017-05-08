import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class QuestionsList extends Component {
  render() {
    const { questions, onHandleSelectAnswer } = this.props
    return (
      <div className="questionsList">
        <h2>Questions</h2>
        {questions.map(question => (
            <div key={question.id}>
               <div>
                  <span>{question.question}</span>
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
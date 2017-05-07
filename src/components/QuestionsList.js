import React, { Component } from 'react';
import QuestionItem from './QuestionItem';

class QuestionsList extends Component {
  render() {
    const { questions } = this.props
    return (
      <div className="questionsList">
        <h2>Questions</h2>
        {questions.map(question => (
            <div key={question.id}>
               <QuestionItem key={question.id} {...question} />
            </div>
        ))}
      </div>
    );
  }
}

export default QuestionsList;

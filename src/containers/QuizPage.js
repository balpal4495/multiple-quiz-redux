import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import QuestionsList from '../components/QuestionsList';
import {
  getQuiz,
  submitQuestion,
  updateQuestion
} from '../actions/quizActions';
import RaisedButton from 'material-ui/RaisedButton';

export class QuizPage extends Component {
  constructor() {
    super();
     this.handleSelectAnswer = this.handleSelectAnswer.bind(this);  
  }
  componentDidMount() {
    this.props.dispatch(getQuiz(5));
  }

  handleSelectAnswer(question, answer) {
    const { quiz } = this.props;
    const payload = {
      questionId: question.id,
      answer: answer.value
    };
    const questionCheck = quiz.filter(( q ) => {
      return q.questionId === question.id;
    });
    
    if(questionCheck.length > 0) {
      this.props.dispatch(updateQuestion(payload))
    } else {
      this.props.dispatch(submitQuestion(payload));
    }
  }

  render() {
    const { questions } = this.props;
    return (
      <div className="App">
          {questions ? 
           <div>
             Quiz App
               <QuestionsList questions={questions} onHandleSelectAnswer={this.handleSelectAnswer} />
               <RaisedButton label="Submit" />         
           </div> : 'loading ....'}
      </div>
    );
  }
}


QuizPage.propTypes = {
  questions: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};
const mapStateToProps = ({ questions, answers, quiz }) => ({
  quiz: quiz,
  questions: questions[0],
//   answers: answers[0]
});

export default connect(mapStateToProps)(QuizPage);

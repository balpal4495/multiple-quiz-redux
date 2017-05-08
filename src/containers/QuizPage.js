import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import QuestionsList from '../components/QuestionsList';
import {
  getQuiz
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
    // this.props.dispatch(selectImageAction(selectedImage));
    console.log('answerObjectsss::', question)
    console.log('answerObjsdsds::', answer)
  }
  render() {
    console.log('props::', this.props)
    const { questions } = this.props;
    return (
      <div className="App">
          Quiz App
          <RaisedButton label="Yay Buttons" />
          {questions ? 
           <div>
               <QuestionsList questions={questions} onHandleSelectAnswer={this.handleSelectAnswer} />
           </div> : 'loading ....'}
      </div>
    );
  }
}


QuizPage.propTypes = {
  questions: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};
const mapStateToProps = ({ questions, answers }) => ({
  questions: questions[0],
//   answers: answers[0]
});

export default connect(mapStateToProps)(QuizPage);

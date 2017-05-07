import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {
  getQuiz
} from '../actions/quizActions';

export class QuizPage extends Component {
  constructor() {
    super();  
  }
  componentDidMount() {
    this.props.dispatch(getQuiz(5));
  }
  render() {
    console.log('props::', this.props)
    const { questions } = this.props;
    return (
      <div className="App">
          Hello World
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
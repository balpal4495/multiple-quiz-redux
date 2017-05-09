import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import QuestionsList from '../components/QuestionsList';
import ResultsPage from '../components/ResultsPage';
import { 
  getQuizScore,
  getQuestionsAnswers
 } from '../selectors'
import {
  getQuiz,
  submitQuestion,
  updateQuestion
} from '../actions/quizActions';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export class QuizPage extends Component {
  constructor() {
    super();
     this.handleSelectAnswer = this.handleSelectAnswer.bind(this);  
     this.handleOpen = this.handleOpen.bind(this);
     this.handleClose = this.handleClose.bind(this);
     this.state = {
      open: false,
    };
  }
  componentDidMount() {
    // this controls how many questions can be displayed
    // this has a dependency on the data and answers specified in the ./data folder
    // you cannot generate more questions if they do not exist in the data source
    this.props.dispatch(getQuiz(5));
  }

  handleSelectAnswer(question, answer) {
    const { quiz } = this.props;
    const payload = { questionId: question.id, answer: answer.value };
    const questionCheck = quiz.filter(( q ) => {
      return q.questionId === question.id;
    });

    if(questionCheck.length > 0) {
      this.props.dispatch(updateQuestion(payload))
    } else {
      this.props.dispatch(submitQuestion(payload));
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const { questions, questionsAnswers, score } = this.props;
    const actions = <FlatButton label="Ok" primary={true} onTouchTap={this.handleClose} />;
    return (
      <div className="App">
          {questions ? 
           <div>
               <QuestionsList questions={questions} onHandleSelectAnswer={this.handleSelectAnswer} />
               <RaisedButton label="Submit" onTouchTap={this.handleOpen} />
               <Dialog
                title="Results"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}
              >
               <ResultsPage questions={questions} score={score} answers={questionsAnswers}  />
              </Dialog>  
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
  questionsAnswers: getQuestionsAnswers(questions[0]),
  score: getQuizScore(quiz),
});

export default connect(mapStateToProps)(QuizPage);

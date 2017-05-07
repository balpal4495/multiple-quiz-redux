import React, { Component } from 'react';
import { connect } from 'react-redux';

export class QuizPage extends Component {
  constructor() {
    super();  
  }
  render() {
    return (
      <div className="App">
          Hello World
      </div>
    );
  }
}
  const mapStateToProps = (state) => {
    return {}
  }

export default connect(mapStateToProps)(QuizPage);

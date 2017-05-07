import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import Header from '../common/Header';
// import TitleBar from '../common/TitleBar';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};
export default App;

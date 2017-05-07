import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import QuizPage from './containers/QuizPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={QuizPage} />
  </Route>
);



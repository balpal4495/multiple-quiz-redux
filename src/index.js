import ReactDOM from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStores';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const store = configureStore();
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
   <MuiThemeProvider>
    <Router history={browserHistory} routes={routes} />
   </MuiThemeProvider>
  </Provider>, document.getElementById('root')
);


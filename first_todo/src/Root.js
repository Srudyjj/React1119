// Core
import React from 'react';
// Redux
import { Provider } from 'react-redux';
import store from './store/store';
// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Components
import App from './App';

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/:filter?" component={App} />
      </Router>
    </Provider>
  );
}

export default Root;

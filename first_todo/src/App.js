// Core
import React from 'react';
// Redux
import { Provider } from 'react-redux';
import store from './store/store';
// Styles
import './App.css';
// Components
import List from './components/List/List';
import TODOInput from './components/TODOInput/TODOInput';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TODOInput />
        <List />
      </Provider>
    </div>
  );
}

export default App;

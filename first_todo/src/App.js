// Core
import React from 'react';
// Redux
import { ALL } from './store/actions/types';
// Styles
import './App.css';
// Components
import List from './components/List/List';
import TODOInput from './components/TODOInput/TODOInput';
import NavBar from './components/NavBar/NavBar';

function App({ match: { params } }) {
  return (
    <div className="App">
      <TODOInput />
      <List filter={params.filter || ALL} />
      <NavBar />
    </div>
  );
}

export default App;

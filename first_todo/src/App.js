import React, { useEffect, useState } from 'react';
// Styles
import './App.css';
// Components
import List from './components/List/List';
import TODOInput from './components/TODOInput/TODOInput';

import api from './api/api';

function App() {
  const [state, setState] = useState({ list: [] });

  const onSubmit = async value => {
    const res = await api.post('todos', { text: value, isDone: false });
    setState(prevState => {
      return { list: [...prevState.list, res.data] };
    });
  };

  useEffect(() => {
    api.get('todos').then(res => setState({ list: res.data }));
  }, []);

  return (
    <div className="App">
      <TODOInput onSubmit={onSubmit} />
      <List list={state.list} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
// Styles
import './App.css';
// Components
import List from './components/List/List';
import TODOInput from './components/TODOInput/TODOInput';
import useInputValue from './hooks/useInputValue';

function App() {
  const [state, setState] = useState({ list: [] });

  const { inputValue, onInputChange } = useInputValue('');

  const onSubmit = e => {
    console.log('Submit');
  };

  const onEdit = e => {
    console.log('Edit');
  };

  useEffect(() => {
    fetch('http://localhost:3004/todos')
      .then(res => res.json())
      .then(res => setState({ list: res }));
  }, []);

  return (
    <div className="App">
      <TODOInput
        value={inputValue}
        onSubmit={onSubmit}
        onEdit={onEdit}
        onChange={onInputChange}
      />
      <List list={state.list} />
    </div>
  );
}

export default App;

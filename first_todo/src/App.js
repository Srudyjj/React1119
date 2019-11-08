import React, { useEffect, useState } from 'react';
// Styles
import './App.css';
// Components
import TodoList from './components/TodoList';

function App() {

  const [state, setState] = useState({ list: [] });
  
  useEffect(() => {
    fetch('http://localhost:3004/todos')
      .then(res => res.json())
      .then(res => setState({list:res}));
  }, [])

  return (
    <div className="App">
      <TodoList list={state.list}/>
    </div>
  );
}

export default App;

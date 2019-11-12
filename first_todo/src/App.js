import React, { useEffect, useState } from "react";
// Styles
import "./App.css";
// Components
import List from "./components/List/List";
import TODOInput from "./components/TODOInput/TODOInput";

function App() {
  const [state, setState] = useState({ list: [] });

  const onSubmit = value => {
    setState(prevState => {
      return {
        list: [...prevState.list, { id: 4, text: value, isDone: false }]
      };
    });
  };

  useEffect(() => {
    fetch("http://localhost:3004/todos")
      .then(res => res.json())
      .then(res => setState({ list: res }));
  }, []);

  return (
    <div className="App">
      <TODOInput onSubmit={onSubmit} />
      <List list={state.list} />
    </div>
  );
}

export default App;

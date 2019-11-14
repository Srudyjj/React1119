import React, { useEffect, useState } from 'react';
// Styles
import './App.css';
// Components
import List from './components/List/List';
import TODOInput from './components/TODOInput/TODOInput';

import api from './api/api';

function App() {
  const [state, setState] = useState({ list: [] });
  const [inputValue, setinputValue] = useState("");

  const onSubmit = async (value) => {
    const res = await api.post('todos', { text: value, isDone: false });
    setState(prevState => {
      return { list: [...prevState.list, res.data] };
    });
  };

  const onChange = async (item) => {
    const { id, text, isDone } = item;
    try {
      const res = await api.put(`todos/${id}`, { id, text, isDone });
      setState(prevState => {
        const list = prevState.list.map(item => {
          if (item.id === id) {
            item.text = res.data.text;
            item.isDone = res.data.isDone;
          }
          return item;
        })
        return { list };
      });
    } catch (e) {
      console.log(e);
    }
  }

  const onRemove = async (id) => {
    try {
      await api.delete(`todos/${id}`);
      setState(prevState => {
        const list = prevState.list.filter(item => {
          if (item.id === id) {
            return false;
          }
          return item;
        })
        return { list };
      });
    }
    catch (e) {
      console.log(e);
    }
  }

  const onEdit = (item) => {
    setinputValue(item.text)
  }

  useEffect(() => {
    api.get('todos').then(res => setState({ list: res.data }));
  }, []);

  return (
    <div className="App">
      <TODOInput inputValue={inputValue} onSubmit={onSubmit} />
      <List list={state.list} onChange={onChange} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;

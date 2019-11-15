import React, { useEffect, useState } from 'react';
// Styles
import './App.css';
// Components
import List from './components/List/List';
import TODOInput from './components/TODOInput/TODOInput';

import api from './api/api';

function App() {
  const [state, setState] = useState({ list: [] });
  const [inputItem, setInputItem] = useState({
    id: 0,
    text: '',
    isDone: false
  });

  const [isEdit, setEditMode] = useState(false);

  const onSubmit = async value => {
    const res = await api.post('todos', { text: value, isDone: false });
    setState(prevState => {
      return { list: [...prevState.list, res.data] };
    });
  };

  const onSave = item => console.log(item);

  const onChange = async item => {
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
        });
        return { list };
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onRemove = async id => {
    try {
      await api.delete(`todos/${id}`);
      setState(prevState => {
        const list = prevState.list.filter(item => {
          if (item.id === id) {
            return false;
          }
          return item;
        });
        return { list };
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    api.get('todos').then(res => setState({ list: res.data }));
  }, []);

  return (
    <div className="App">
      <TODOInput
        inputItem={inputItem}
        isEdit={isEdit}
        onSubmit={onSubmit}
        onSave={onSave}
        onEditMode={setEditMode}
      />
      <List
        list={state.list}
        onChange={onChange}
        onRemove={onRemove}
        onEdit={setInputItem}
        onEditMode={setEditMode}
      />
    </div>
  );
}

export default App;

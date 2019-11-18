import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { connect } from 'react-redux';
import getTodos from './store/actions/todoActions';
// Styles
import './App.css';
// Components
import List from './components/List/List';
import TODOInput from './components/TODOInput/TODOInput';

import api from './api/api';

function App(props) {
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

  useEffect(() => getTodos(), []);

  function mapStateToProps(state) {
    return {
      list: state.list
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      addTodo: item => dispatch(getTodos(item))
    };
  }

  return (
    <div className="App">
      <Provider store={store}>
        <TODOInput
          inputItem={inputItem}
          isEdit={isEdit}
          onSubmit={onSubmit}
          onSave={onChange}
          onEditMode={setEditMode}
        />
        <List
          list={state.list}
          onChange={onChange}
          onRemove={onRemove}
          isEdit={isEdit}
          onEdit={setInputItem}
          onEditMode={setEditMode}
        />
      </Provider>
    </div>
  );
}

export default App;

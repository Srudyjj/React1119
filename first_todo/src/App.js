import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
// Styles
import './App.css';
// Components
import List from './components/List/List';
import TODOInput from './components/TODOInput/TODOInput';

function App(props) {
  // const [state, setState] = useState({ list: [] });
  // const [inputItem, setInputItem] = useState({
  //   id: 0,
  //   text: '',
  //   isDone: false
  // });

  // const [isEdit, setEditMode] = useState(false);

  // const onSubmit = async value => {
  //   const res = await api.post('todos', { text: value, isDone: false });
  //   setState(prevState => {
  //     return { list: [...prevState.list, res.data] };
  //   });
  // };

  // const onChange = async item => {
  //   const { id, text, isDone } = item;
  //   try {
  //     const res = await api.put(`todos/${id}`, { id, text, isDone });
  //     setState(prevState => {
  //       const list = prevState.list.map(item => {
  //         if (item.id === id) {
  //           item.text = res.data.text;
  //           item.isDone = res.data.isDone;
  //         }
  //         return item;
  //       });
  //       return { list };
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const onRemove = async id => {
  //   try {
  //     await api.delete(`todos/${id}`);
  //     setState(prevState => {
  //       const list = prevState.list.filter(item => {
  //         if (item.id === id) {
  //           return false;
  //         }
  //         return item;
  //       });
  //       return { list };
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <div className="App">
      <Provider store={store}>
        {/* <TODOInput
          inputItem={inputItem}
          isEdit={isEdit}
          onSubmit={onSubmit}
          onSave={onChange}
          onEditMode={setEditMode}
        /> */}
        <List />
      </Provider>
    </div>
  );
}

export default App;

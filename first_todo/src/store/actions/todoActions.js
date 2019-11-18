import { GET_TODOS, ADD_TODO, EDIT_TODO, REMOVE_TODO } from './types';
import api from './api/api';

export function getTodos() {
  return async function(dispatch) {
    const res = await api.get('todos');
    dispatch({
      type: GET_TODOS,
      payload: res.data
    });
  };
}

export const addTodo = value => async dispatch => {
  const res = await api.post('todos', { text: value, isDone: false });
  dispatch({
    type: ADD_TODO,
    payload: res.data
  });
};

export const editTodo = item => async dispatch => {
  const { id, text, isDone } = item;
  const res = await api.put(`todos/${id}`, { id, text, isDone });
  dispatch({
    type: EDIT_TODO,
    payload: res.data
  });
};

import {
  GET_TODOS,
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  TOGGLE_EDIT
} from './types';
import api from '../../api/api';

export function getTodos() {
  return async function(dispatch) {
    const res = await api.get('todos');
    //TODO Handle error
    dispatch({
      type: GET_TODOS,
      payload: res.data
    });
  };
}

export const addTodo = value => async dispatch => {
  const res = await api.post('todos', { text: value, isDone: false });
  //TODO Handle error
  dispatch({
    type: ADD_TODO,
    payload: res.data
  });
};

export const updateTodo = item => async dispatch => {
  const { id, text, isDone } = item;
  const res = await api.put(`todos/${id}`, { id, text, isDone });
  //TODO Handle error
  dispatch({
    type: UPDATE_TODO,
    payload: res.data
  });
};

export const editTodo = item => dispatch => {
  dispatch({
    type: EDIT_TODO,
    payload: item
  });
};

export const toggleEdit = isEdit => dispatch => {
  dispatch({
    type: TOGGLE_EDIT,
    payload: isEdit
  });
};

export const removeTodo = item => async dispatch => {
  const { id } = item;
  await api.delete(`todos/${id}`);
  //TODO Handle error
  dispatch({
    type: REMOVE_TODO,
    payload: item
  });
};

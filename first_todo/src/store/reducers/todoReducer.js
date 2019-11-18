import { GET_TODOS, ADD_TODO, EDIT_TODO, REMOVE_TODO } from './types';

const initialState = {
  list: []
};

const actionMap = new Map([
  [
    GET_TODOS,
    (state, payload) => {
      return { ...state, list: payload };
    }
  ],
  [
    ADD_TODO,
    (state, payload) => {
      return { ...state, list: [payload, ...state.list] };
    }
  ],
  [
    EDIT_TODO,
    (state, payload) => {
      return {
        ...state,
        list: state.list.map(item =>
          item.id === payload.id ? (item = payload) : item
        )
      };
    }
  ],
  [
    REMOVE_TODO,
    (state, payload) => {
      return {
        ...state,
        list: state.list.filter(item => item.id !== payload.id)
      };
    }
  ]
]);

export default function reducer(state = initialState, action) {
  if (actionMap.has(action.type)) {
    return actionMap.get(action.type)(state, action.payload);
  }
  return state;
}

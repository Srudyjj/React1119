import {
  GET_TODOS,
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  TOGGLE_EDIT
} from '../actions/types';

const initialState = {
  list: [],
  currentEditItem: {
    id: 0,
    text: '',
    isDone: false
  },
  isEdit: false
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
    UPDATE_TODO,
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
    EDIT_TODO,
    (state, payload) => {
      return {
        ...state,
        currentEditItem: payload
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
  ],
  [
    TOGGLE_EDIT,
    (state, payload) => {
      return {
        ...state,
        isEdit: payload
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

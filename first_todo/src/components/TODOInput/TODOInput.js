import React from 'react';
import { connect } from 'react-redux';
import useInputValue from '../../hooks/useInputValue';
import {
  addTodo,
  toggleEdit,
  updateTodo
} from '../../store/actions/todoActions';

function TODOInput(props) {
  const { currentEditItem, isEdit, addTodo, toggleEdit, updateTodo } = props;
  const { id, text, isDone } = currentEditItem;
  const { value, onChange } = useInputValue(text, isEdit);

  const internalOnSubmit = e => {
    e.preventDefault();
    addTodo(value);
    onChange({ target: { value: '' } });
  };

  const internalOnSave = e => {
    e.preventDefault();
    updateTodo({ id, text: value, isDone });
    onChange({ target: { value: '' } });
    toggleEdit(false);
  };

  const onCancel = e => {
    e.preventDefault();
    onChange({ target: { value: '' } });
    toggleEdit(false);
  };

  return (
    <form onSubmit={internalOnSubmit}>
      <input type="text" value={value} onChange={onChange} />
      {isEdit ? (
        <>
          <button onClick={internalOnSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </>
      ) : (
        <button type="submit">Add</button>
      )}
    </form>
  );
}

const mapStateToProps = state => {
  return {
    isEdit: state.todos.isEdit,
    currentEditItem: state.todos.currentEditItem
  };
};

export default connect(mapStateToProps, {
  addTodo,
  toggleEdit,
  updateTodo
})(TODOInput);

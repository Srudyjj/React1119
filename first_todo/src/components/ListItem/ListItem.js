// Core
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import {
  editTodo,
  removeTodo,
  toggleEdit,
  updateTodo
} from '../../store/actions/todoActions';
// Components
import Checkbox from '../Checkobox/Checkbox';
import RemoveButton from '../RemoveButton/RemoveButton';
import EditButton from '../EditButton/EditButton';

function ListItem(props) {
  const {
    id,
    text,
    isDone,
    isEdit,
    editTodo,
    removeTodo,
    toggleEdit,
    updateTodo
  } = props;

  const onRemoveClick = () => removeTodo({ id });
  const onDone = e => {
    const isDone = e.currentTarget.checked;
    updateTodo({ id, text, isDone: isDone });
  };
  const onEditClick = () => {
    toggleEdit(true);
    editTodo({ id, text, isDone });
  };

  return (
    <li>
      <Checkbox isDone={isDone} onChange={onDone} />
      {text}
      {!isEdit && (
        <>
          <RemoveButton onClick={onRemoveClick} />
          <EditButton onClick={onEditClick} />
        </>
      )}
    </li>
  );
}

const mapStateToProps = state => {
  return {
    isEdit: state.todos.isEdit
  };
};

export default connect(mapStateToProps, {
  editTodo,
  removeTodo,
  toggleEdit,
  updateTodo
})(ListItem);

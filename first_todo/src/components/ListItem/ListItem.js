import React from 'react';
import Checkbox from '../Checkobox/Checkbox';
import RemoveButton from '../RemoveButton/RemoveButton';
import EditButton from '../EditButton/EditButton';

export default function ListItem(props) {
  const { id, text, isDone, onChange, onRemove, onEdit } = props;


  const onRemoveClick = () => onRemove(id);
  const onDone = e => {
    const isDone = e.currentTarget.checked;
    onChange({ id, text, isDone: isDone });
  }

  const onEditClick = () => {
    onEdit({ id, text, isDone: isDone });
  }

  return (
    <li>
      <Checkbox isDone={isDone} onChange={onDone} />
      {text}
      <RemoveButton onClick={onRemoveClick} />
      <EditButton onClick={onEditClick} />
    </li>
  );
}

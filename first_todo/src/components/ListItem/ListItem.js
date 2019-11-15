import React, { useState } from 'react';
import Checkbox from '../Checkobox/Checkbox';
import RemoveButton from '../RemoveButton/RemoveButton';
import EditButton from '../EditButton/EditButton';

export default function ListItem(props) {
  const {
    id,
    text,
    isDone,
    isEdit,
    onChange,
    onRemove,
    onEdit,
    onEditMode
  } = props;

  const onRemoveClick = () => onRemove(id);
  const onDone = e => {
    const isDone = e.currentTarget.checked;
    onChange({ id, text, isDone: isDone });
  };
  const onEditClick = () => {
    onEditMode(true);
    onEdit({ id, text, isDone });
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

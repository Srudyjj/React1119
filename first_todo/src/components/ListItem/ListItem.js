import React from 'react';
import Checkbox from '../Checkobox/Checkbox';
import RemoveButton from '../RemoveButton/RemoveButton';

export default function ListItem(props) {
  const { id, text, isDone, onChange, onRemove } = props;

  const onClick = () => onRemove(id);
  const onDone = e => {
    const isDone = e.currentTarget.checked;
    onChange({ id, text, isDone: isDone });
  }

  return (
    <li>
      <Checkbox isDone={isDone} onChange={onDone} />
      {text}
      <RemoveButton onClick={onClick} />
    </li>
  );
}

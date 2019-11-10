import React from 'react';
import Checkbox from '../Checkobox/Checkbox';
import RemoveButton from '../RemoveButton/RemoveButton';

export default function ListItem(props) {
  const { text, isDone } = props;
  const onRemove = () => console.log('On Remove');
  const onChange = () => console.log('On Change');

  return (
    <li>
      <Checkbox isDone={isDone} onChange={onChange} />
      {text}
      <RemoveButton onClick={onRemove} />
    </li>
  );
}

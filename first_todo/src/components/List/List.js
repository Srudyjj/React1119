import React from 'react';
import ListItem from '../ListItem/ListItem';

export default function List(props) {
  const { onChange, onRemove, onEdit } = props;
  return (
    <ul>
      {props.list.map(item => (
        <ListItem key={item.id} onChange={onChange} onRemove={onRemove} onEdit={onEdit} {...item} />
      ))}
    </ul>
  );
}

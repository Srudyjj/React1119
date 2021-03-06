import React from 'react';
import ListItem from '../ListItem/ListItem';

export default function List(props) {
  return (
    <ul>
      {props.list.map(item => (
        <ListItem key={item.id} {...props} {...item} />
      ))}
    </ul>
  );
}

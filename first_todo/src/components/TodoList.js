import React from 'react';

export default function TodoList(props) {
  return (
    <ul>
      {props.list.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  ); 
}
 
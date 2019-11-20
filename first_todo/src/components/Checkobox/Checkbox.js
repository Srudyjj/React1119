// Core
import React from 'react';

export default function Checkbox(props) {
  const { isDone, onChange } = props;
  return <input type="checkbox" checked={isDone} onChange={onChange} />;
}

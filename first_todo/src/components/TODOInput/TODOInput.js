import React from 'react';

export default function TODOInput(props) {
  const { value, onChange, onSubmit, onEdit } = props;
  const internalOnSubmit = e => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form onSubmit={internalOnSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">Add</button>
      <button onClick={onEdit}>Edit</button>
    </form>
  );
}

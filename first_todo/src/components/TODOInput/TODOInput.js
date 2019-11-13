import React from 'react';
import useInputValue from '../../hooks/useInputValue';

export default function TODOInput(props) {
  const { onSubmit } = props;
  const { value, onChange } = useInputValue();

  const internalOnSubmit = e => {
    e.preventDefault();
    onSubmit(e.target[0].value);
    onChange({ target: { value: '' } });
  };

  return (
    <form onSubmit={internalOnSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">Add</button>
    </form>
  );
}

import React from 'react';
import useInputValue from '../../hooks/useInputValue';

export default function TODOInput(props) {
  const { inputItem, isEdit, onSubmit, onSave, onEditMode } = props;
  const { id, text, isDone } = inputItem;
  const { value, onChange } = useInputValue(text);

  const internalOnSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    onChange({ target: { value: '' } });
  };

  const internalOnSave = e => {
    e.preventDefault();
    onSave({ id, text: value, isDone });
    onChange({ target: { value: '' } });
    onEditMode(false);
  };

  const onCancel = e => {
    e.preventDefault();
    onChange({ target: { value: '' } });
    onEditMode(false);
  };

  return (
    <form onSubmit={internalOnSubmit}>
      <input type="text" value={value} onChange={onChange} />
      {isEdit ? (
        <>
          <button onClick={internalOnSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </>
      ) : (
        <button type="submit">Add</button>
      )}
    </form>
  );
}

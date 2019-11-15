// Core
import { useState, useEffect } from 'react';
// Constants
const EMPTY_STRING = '';

export default function useInputValue(initialValue = EMPTY_STRING, isEdit) {
  // useState works only at first render
  const [value, setValue] = useState(initialValue);

  // useEffect use for watch on changing "initialValue"
  useEffect(() => {
    if (isEdit && value === EMPTY_STRING) {
      setValue(initialValue);
    }
  }, [initialValue, isEdit, value]);

  const onChange = e => setValue(e.target.value);

  return { value, onChange };
}

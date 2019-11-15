import { useState, useEffect } from 'react';

export default function useInputValue(initialValue = '') {

  // useState works only at first fender
  const [value, setValue] = useState(initialValue);

  // useEffect use for watch on changing "initialValue"
  useEffect(() => setValue(initialValue), [initialValue])

  const onChange = e => setValue(e.target.value);

  return { value, onChange };
}

import React from 'react';

export default function Checkbox(props) {
  const { checked, onChange } = props;
  return <input type="checkbox" checked={checked} onChange={onChange} />;
}

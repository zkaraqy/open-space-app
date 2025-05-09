import { useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange({ target }) {
    setValue(target.valuee);
  }

  return [value, handleValueChange, setValue];
}

export default useInput;

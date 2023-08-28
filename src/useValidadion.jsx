import { useState } from 'react';

import { validate } from './validators';

const useValidation = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const onChange = event => {
    const value = event.target.value;
    const validationResult = validate(value, 10);

    setInputValue(value);
    setIsValid(validationResult)
  }

  return [
    onChange,
    inputValue,
    isValid
  ]
}

export default useValidation;
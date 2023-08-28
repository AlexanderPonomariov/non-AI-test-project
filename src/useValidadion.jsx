import { useState } from 'react';

import { validate } from './validators';

// TODO: I'd use separate validators inside useValidation hook.
//  Then I'd add one additional item to returned array.
//  This item is object with results of used validators
//  Also I'd add possibility to get the list of validators as an argument of useValidation hook in order to enable only needed validators
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
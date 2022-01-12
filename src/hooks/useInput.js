import { useState } from "react";
import { useValidation, useAddErrors } from "./index";

const useInput = (initialValue, validations, fieldName) => {
  let { addError } = useAddErrors();
  const [value, setValue] = useState(initialValue);

  const valid = useValidation(value, validations, fieldName);

  const onChange = (e) => {
    return setValue(e.target.value);
  };

  const showErr = () => {
    valid.messageError.map(({ _, message }) => {
      addError(message);
    });
  };

  return {
    onChange,
    showErr,
    setValue,
    value,

    ...valid,
  };
};

export default useInput;

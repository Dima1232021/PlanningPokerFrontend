import { useState } from "react";
import { useValidation } from "./useValidation";
import { useAddErrors } from "./useAddErrors";

export const useInput = (initialValue, validations, fieldName) => {
  let { addError } = useAddErrors();
  const [value, setValue] = useState(initialValue);

  const valid = useValidation(value, validations, fieldName);

  const onChange = (e) => {
    return setValue(e.target.value);
  };

  const outputError = () => {
    valid.messageError.map(({ _, message }) => {
      addError(message);
    });
  };

  return {
    onChange,
    outputError,
    setValue,
    value,

    ...valid,
  };
};

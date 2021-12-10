import React, { useEffect, useState, useCallback } from "react";

export const useValidation = (value, validations, fieldName) => {
  const [maxLength, setMaxLength] = useState(false);
  const [minLength, setMinLength] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState(false);

  const [messageError, setMessageError] = useState([]);
  const [isValid, setValid] = useState(false);

  function addMessageError(idError, message) {
    setMessageError((val) => [...val, { idError, message }]);
  }

  function deleteMessageError(idError) {
    setMessageError((vaд) => vaд.filter((item) => item.idError !== idError));
  }

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "maxLength":
          if (value.length > validations[validation]) {
            !maxLength &&
              addMessageError(
                1,
                `${fieldName} field: cannot contain more than ${validations[validation]} characters`
              );
            setMaxLength(true);
          } else {
            maxLength && deleteMessageError(1);
            setMaxLength(false);
          }
          break;

        case "minLength":
          if (value.length < validations[validation]) {
            !minLength &&
              addMessageError(
                2,
                `${fieldName} field: cannot contain less than ${validations[validation]} characters`
              );
            setMinLength(true);
          } else {
            minLength && deleteMessageError(2);
            setMinLength(false);
          }
          break;

        case "isEmail":
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

          if (re.test(String(value).toLowerCase())) {
            emailError && deleteMessageError(4);
            setEmailError(false);
          } else {
            !emailError &&
              addMessageError(4, `${fieldName} field: Invalid Email entered`);
            setEmailError(true);
          }
          break;

        case "passwordConfirmation":
          if (validations[validation] !== value) {
            !passwordConfirmation &&
              addMessageError(5, `${fieldName} field: password does not match`);
            setPasswordConfirmation(true);
          } else {
            passwordConfirmation && deleteMessageError(5);
            setPasswordConfirmation(false);
          }
          break;
      }
    }
  }, [value, validations]);

  useEffect(() => {
    !messageError.length ? setValid(true) : setValid(false);
  }, [messageError]);

  return {
    emailError,
    minLength,
    maxLength,
    passwordConfirmation,
    messageError,
    isValid,
  };
};

import React, { useEffect, useState, useCallback } from "react";

export const useValidation = (value, validations) => {
  const [maxLength, setMaxLength] = useState(false);
  const [minLength, setMinLength] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isEmpty, setEmpty] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState(false);

  const [messageError, setMessageError] = useState([]);
  const [inputValid, setInputValid] = useState(false);

  function addMessageError(error, message) {
    setMessageError((val) => [...val, { error, message }]);
  }
  function deleteMessageError(val) {
    let arr = messageError.filter((item) => item.error !== val);
    setMessageError(arr);
  }

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "maxLength":
          if (value.length > validations[validation]) {
            !maxLength &&
              addMessageError(
                1,
                `Поле не може містить більше ніж ${validations[validation]} символів`
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
                `Поле не може містить менше ніж ${validations[validation]} символів`
              );
            setMinLength(true);
          } else {
            minLength && deleteMessageError(2);
            setMinLength(false);
          }
          break;

        case "isEmpty":
          if (value.length) {
            deleteMessageError(10);
            setEmpty(false);
          } else {
            !isEmpty && addMessageError(10, "Поле не може бути пустим");
            setEmpty(true);
          }
          break;

        case "isEmail":
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

          if (re.test(String(value).toLowerCase())) {
            emailError && deleteMessageError(4);
            setEmailError(false);
          } else {
            !emailError && addMessageError(4, "Некоректний Email");
            setEmailError(true);
          }
          break;

        case "passwordConfirmation":
          if (validations[validation] !== value) {
            !passwordConfirmation && addMessageError(5, "Паролі не збігаються");
            setPasswordConfirmation(true);
          } else {
            passwordConfirmation && deleteMessageError(5);
            setPasswordConfirmation(false);
          }
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (messageError.length) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [messageError]);

  return {
    emailError,
    isEmpty,
    minLength,
    maxLength,
    passwordConfirmation,
    inputValid,
    messageError,
  };
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addErrorAction, deleteErrorsAction } from "../reducers/errorsReducer";

export function useAddErrors(value) {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors.errors);

  const addError = (message) => {
    let arr = errors.find((value) => value === message);

    if (!arr) {
      dispatch(addErrorAction(message));
      setTimeout(() => dispatch(deleteErrorsAction()), 5000);
    }
  };

  return { addError };
}

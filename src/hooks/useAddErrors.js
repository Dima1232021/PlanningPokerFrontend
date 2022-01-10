import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addErrorAction, deleteErrorsAction } from "../reducers/errorsReducer";

export function useAddErrors(value) {
  const dispatch = useDispatch();
  const { errors, time } = useSelector((state) => state.errors);

  const addError = (message) => {
    const date = Date.now();
    const arr = errors.find((value) => value === message);

    if (!arr) {
      dispatch(addErrorAction({ message, id: date }));
      setTimeout(() => dispatch(deleteErrorsAction(date)), 5000);
    }
  };

  return { addError };
}

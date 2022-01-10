import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addErrorAction, deleteErrorsAction } from "../reducers/errorsReducer";

export function useAddErrors(value) {
  const dispatch = useDispatch();
  const { errors, time } = useSelector((state) => state.errors);

  const addError = (message) => {
    let date = Date.now();
    const arr = errors.find((value) => value.message === message);

    if (!arr) {
      dispatch(addErrorAction({ message, id: date }));
      // setTimeout(() => dispatch(deleteErrorsAction(date)), time);
    }
  };

  return { addError };
}

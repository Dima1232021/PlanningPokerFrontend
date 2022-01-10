import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteErrorsAction } from "../reducers/errorsReducer";

export default function OutputErrors() {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors.errors);

  function deleteError(id) {
    dispatch(deleteErrorsAction(id));
  }

  return (
    !!errors.length && (
      <div className="error">
        <ul className="error__list">
          {errors.map((error) => {
            return (
              <li key={error.id} className="error__link">
                <div className="error__message">{error.message}</div>
                <button
                  className="error__delete"
                  onClick={() => deleteError(error.id)}
                >
                  &#10060;
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}

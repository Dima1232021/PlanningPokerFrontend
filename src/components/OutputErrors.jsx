import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { deleteErrorsAction } from "../reducers/errorsReducer";

export default function OutputErrors() {
  // const dispatch = useDispatch();
  const error = useSelector((state) => state.error.error);
  const { deleteErrorAction } = useActions();

  return (
    !!error.length && (
      <div className="error">
        <ul className="error__list">
          {error.map((err, index) => {
            return (
              <li key={index} className="error__link">
                <div className="error__message">{err.message}</div>
                <button
                  className="error__delete"
                  onClick={() => deleteErrorAction(err.id)}
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

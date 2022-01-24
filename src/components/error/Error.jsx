import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/index";
import "./error.scss";

export default function Error() {
  const error = useSelector((state) => state.error.error);
  const { deleteErrorAction } = useActions();

  return (
    !!error.length && (
      <div className="error">
        <ul className="error__list">
          {error.map((err) => {
            return (
              <li key={err.id} className="error__link">
                <div className="error__message">{err.message}</div>
                <button className="error__delete btn" onClick={() => deleteErrorAction(err.id)}>
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

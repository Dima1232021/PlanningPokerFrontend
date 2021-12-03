import React from "react";

import "./usersBlock.scss";

export default function UsersBlock({
  value,
  keyValue = false,
  name = false,
  nameBtn = false,
  nameBtn2 = false,
  setValue,
  setValue2,
}) {
  return (
    <div className="usersBlock">
      <ul className="usersBlock__list">
        {value.map((val, index) => {
          return (
            <li
              key={keyValue ? val[keyValue] : index}
              className="usersBlock__link"
            >
              <span>{name ? val[name] : val}</span>

              {nameBtn && nameBtn2 ? (
                <div>
                  <button onClick={() => setValue(val)}>{nameBtn}</button>
                  <button onClick={() => setValue2(val)}>{nameBtn2}</button>
                </div>
              ) : nameBtn && !nameBtn2 ? (
                <button onClick={() => setValue(val)}>{nameBtn}</button>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

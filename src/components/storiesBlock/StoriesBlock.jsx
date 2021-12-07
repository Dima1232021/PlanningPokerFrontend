import React from "react";

import "./storiesBlock.scss";

export default function StoriesBlock({
  value,
  keyValue = false,
  name = false,
  nameBtn = false,
  nameBtn2 = false,
  setValue,
  setValue2,
}) {
  return (
    <div className="storiesBlock">
      <ul className="storiesBlock__list">
        {value.map((val, index) => {
          return (
            <li key={val[keyValue]} className="storiesBlock__link">
              <div className="storiesBlock__row">
                <span>Story {index + 1}</span>

                {nameBtn && nameBtn2 ? (
                  <div>
                    <button onClick={() => setValue(val)}>{nameBtn}</button>
                    <button onClick={() => setValue2(val)}>{nameBtn2}</button>
                  </div>
                ) : nameBtn && !nameBtn2 ? (
                  <button onClick={() => setValue(val)}>{nameBtn}</button>
                ) : null}
              </div>

              <p>{val[name]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import React from "react";

export default function List({ nameBtn, fan, data }) {
  return (
    <ul className="block__list">
      {data.map((value) => {
        return (
          <li key={value.id} className="block__link">
            <span>{value.username}</span>
            <button onClick={() => fan(value)}>{nameBtn}</button>
          </li>
        );
      })}
    </ul>
  );
}

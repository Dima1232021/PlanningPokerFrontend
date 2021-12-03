import React, { useState } from "react";
import "./menuBlock.scss";

export default function MenuBlock({ btn1, btn2, value, setValue }) {
  const classname = (val) =>
    value === val ? "menu-block__link active" : "menu-block__link";

  return (
    <div className="menu-block">
      <ul className="menu-block__list">
        <li className={classname(btn1)} onClick={() => setValue(btn1)}>
          {btn1}
        </li>
        <li className={classname(btn2)} onClick={() => setValue(btn2)}>
          {btn2}
        </li>
      </ul>
    </div>
  );
}

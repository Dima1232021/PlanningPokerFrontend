import React from "react";

function MenuBlock({ value, setValue }) {
  const classname = (name) => (value === name ? "auth__link active" : "auth__link");

  return (
    <div className="auth__menu">
      <ul className="auth__list">
        <li className={classname("Log in")} onClick={() => setValue("Log in")}>
          Log in
        </li>
        <li className={classname("Sign up")} onClick={() => setValue("Sign up")}>
          Sign up
        </li>
      </ul>
    </div>
  );
}

export default MenuBlock;

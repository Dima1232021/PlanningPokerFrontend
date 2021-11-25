import React from "react";

export default function Cheks({ justDriving, setJustDriving }) {
  return (
    <div className="block__form-check">
      <p className="block__text">Виберіть ким ви хотіли бути у грі</p>
      <div className="block__check">
        <input
          className="block__radio"
          type="radio"
          onChange={() => setJustDriving(true)}
          checked={justDriving === true}
          id="Radios1"
        />
        <label className="block__label" htmlFor="Radios1">
          Просто ведучий
        </label>
      </div>
      <div className="block__check">
        <input
          className="block__radio"
          type="radio"
          onChange={() => setJustDriving(false)}
          checked={justDriving === false}
          id="Radios2"
        />
        <label className="block__label" htmlFor="Radios2">
          Ведучим та гравцем
        </label>
      </div>
    </div>
  );
}

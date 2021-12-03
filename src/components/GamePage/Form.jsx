import React from "react";

export default function Form({ active }) {
  return (
    <div className={`game__form form ${active && "active"}`}>
      <div className="form__gg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        consequatur omnis numquam laudantium veritatis odio, sed officia
        nesciunt eveniet. Voluptas, laborum similique! Perspiciatis illo cum,
        odit perferendis repellat consequuntur nihil.
      </div>
    </div>
  );
}

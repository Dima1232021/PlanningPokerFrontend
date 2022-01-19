import React from "react";
import Modal from "../../Modal/Modal";

export default function ModelStory({
  title,
  textStory,
  active,
  setActive,
  setValue,
  nameBtn,
}) {
  return (
    <Modal active={active} setActive={setActive}>
      <div className="menu__modal">
        <h2 className="menu__modal-title">{title}</h2>
        <textarea
          className="menu__textarea"
          value={textStory.value}
          onChange={(e) => textStory.onChange(e)}
          placeholder="Enter history"
          onBlur={textStory.outputError}
        ></textarea>

        <button className="menu__btn-leave" onClick={() => setActive(false)}>
          Cancel
        </button>

        <button
          className="menu__btn-сhange"
          onClick={() => {
            if (textStory.isValid) {
              setActive(false);
              return setValue();
            }
            return textStory.outputError();
          }}
        >
          {nameBtn}
        </button>
      </div>
    </Modal>
  );
}

import React from "react";
import Modal from "../../Modal/Modal";

export default function ModalStory({ title, textStory, active, setActive, setValue, nameBtn }) {
  return (
    <Modal active={active} setActive={setActive}>
      <div className="game-menu__modal">
        <h2 className="game-menu__title">{title}</h2>
        <textarea
          className="game-menu__textarea"
          value={textStory.value}
          onChange={(e) => textStory.onChange(e)}
          placeholder="Enter history"
          onBlur={textStory.outputError}
        ></textarea>

        <button className="game-menu__btn-leave" onClick={() => setActive(false)}>
          Cancel
        </button>

        <button
          className="game-menu__btn-modal"
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

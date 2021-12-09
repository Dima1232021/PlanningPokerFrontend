import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FormPlayerCards from "./FormPlayerCards";
import FormStory from "./FormStory";
import FormUsers from "./FormUsers";

import "./form.scss";

export default function Form({ active }) {
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const [isEmpty, setEmpty] = useState(true);

  useEffect(() => {
    setEmpty(Object.keys(game.selected_story).length === 0);
  }, [game]);

  return (
    <div className={`game__form form ${active && "active"}`}>
      <div className="form__row">
        <div className="form__header ">
          <h2 className="form__name-game">{game.name_game}</h2>
          <p className="form__driving">
            <b>Driving:</b>
            {game.driving.user_name}
          </p>
        </div>
      </div>

      <div className="form__row">
        <FormStory isEmpty={isEmpty} />
      </div>

      <div className="form__row">
        <FormUsers isEmpty={isEmpty} />
      </div>

      <div className="form__row">
        <FormPlayerCards isEmpty={isEmpty} />
      </div>
    </div>
  );
}

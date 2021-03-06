import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useActions, useAddErrors, useConfirm } from "../../../hooks";
import MenuStories from "./MenuStories";
import Message from "../../message/Message";
import ShowUsers from "./ShowUsers";
import addIcon from "../../../icones/add.svg";
import SetingsGame from "./SetingsGame";
import { API_URL } from "../../../config";

import "./menuGame.scss";

function MenuGame() {
  const history = useHistory();
  const { confirm } = useConfirm();
  const { addError } = useAddErrors();
  const { setIsActiveMenu, liveTheGameAction } = useActions();
  const { userId } = useSelector((state) => state.auth);
  const { isActiveMenu, urlGame, driving } = useSelector((state) => state.game);
  const [isActiveMessage, setActiveMessage] = useState(false);

  async function leave() {
    const isConfirmed = await confirm("Do you want to leave the game ?");
    if (isConfirmed) {
      liveTheGameAction(addError);
      history.push("/");
    }
  }

  function copyLink() {
    setActiveMessage(true);
    setTimeout(() => setActiveMessage(false), 3000);
    navigator.clipboard.writeText(`${window.location.origin}/game/${urlGame}`);
  }

  return (
    <div className="game-menu ">
      <div className="game-menu__column">
        <button className="game-menu__btn-menu btn" onClick={() => setIsActiveMenu(!isActiveMenu)}>
          {isActiveMenu ? ">>" : "<<"}
        </button>
      </div>

      <div className="game-menu__column">
        <div className="game-menu__row">
          <h2 className="game-menu__title">Menu</h2>
          <button className="game-menu__btn-icon btn" onClick={copyLink}>
            <img src={addIcon} className="main__icon" alt="" />
          </button>
          <button onClick={leave} className="game-menu__btn-leave btn">
            Exit game
          </button>
        </div>

        <MenuStories />

        <ShowUsers />

        {driving.user_id === userId && <SetingsGame />}
      </div>
      {isActiveMessage && <Message />}
    </div>
  );
}

export default MenuGame;

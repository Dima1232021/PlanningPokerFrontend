import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions, useAddErrors } from "../../hooks";
import deleteIcon from "../../icones/delete.svg";
import addIcon from "../../icones/add.svg";
import "./main.scss";

const MainPage = () => {
  const { addError } = useAddErrors();
  const { gamesAction } = useActions();
  const { ownGames } = useSelector((state) => state.games);
  useEffect(() => {
    gamesAction(addError);
  }, []);

  function 

  return (
    <div className="main">
      <div className="container">
        <div className="main__row">
          <div className="main__block ">
            <div className="main__header">
              <p className="main__title">Own games</p>
              <button className="main__btn" onClick={() => console.log("oneclick")}>
                Create game
              </button>
            </div>

            <ul className="main__list">
              {ownGames.map(({ id, name_game }) => (
                <li key={id} className="main__link" onClick={() => console.log("oneclick")}>
                  <p className="main__text">{name_game}</p>
                  <div>
                    <button className="main__btn" onClick={() => console.log("oneclick")}>
                      <img src={addIcon} className="main__icon" alt="" />
                    </button>
                    <button className="main__btn" onClick={() => console.log("oneclick")}>
                      <img src={deleteIcon} className="main__icon" alt="" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

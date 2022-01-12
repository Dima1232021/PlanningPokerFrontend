import React from "react";
import { useSelector } from "react-redux";
import deleteIcon from "../../icones/delete.svg";
import addIcon from "../../icones/add.svg";
import { useHistory } from "react-router";
import "./main.scss";

const MainPage = () => {
  const history = useHistory();
  const { ownGames } = useSelector((state) => state.games);

  function createGame() {
    history.push("/create_game");
  }

  function joinTheGame() {
    console.log("oneclick joinTheGame");
  }
  function deleteGame(event) {
    event.stopPropagation();
    console.log("oneclick deleteGame");
  }
  function copyLink(event) {
    event.stopPropagation();
    console.log("oneclick copyLink");
  }

  return (
    <div className="main">
      <div className="container">
        <div className="main__row">
          <div className="main__block ">
            <div className="main__header">
              <p className="main__title">Own games</p>
              <button className="main__btn" onClick={createGame}>
                Create game
              </button>
            </div>

            <ul className="main__list">
              {ownGames.map(({ id, name_game }) => (
                <li key={id} className="main__link" onClick={joinTheGame}>
                  <p className="main__text">{name_game}</p>
                  <div>
                    <button className="main__btn" onClick={copyLink}>
                      <img src={addIcon} className="main__icon" alt="" />
                    </button>
                    <button className="main__btn" onClick={deleteGame}>
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

import React from "react";
import deleteIcon from "../../icones/delete.svg";
import addIcon from "../../icones/add.svg";
import Loader from "../loader/Loader";

function Forms({ title, listGames, joinTheGame, copyLink, deleteGame, createGame, isLoading }) {
  return (
    <div className="main__block ">
      <div className="main__header">
        <p className="main__title">{title}</p>
        {!!createGame && (
          <button className="main__btn" onClick={createGame}>
            Create game
          </button>
        )}
      </div>

      <ul className="main__list">
        {listGames.map(({ id, name_game, url, drivingName = false }) => (
          <li key={id} className="main__link" onClick={() => joinTheGame(url)}>
            <div className="main__btns">
              <div className="main__footer">
                <h3>Driving:</h3>
                <p>{drivingName ? drivingName : "You"}</p>
              </div>

              <button className="main__btn" onClick={(e) => copyLink(e, url)}>
                <img src={addIcon} className="main__icon" alt="" />
              </button>
              <button className="main__btn" onClick={(e) => deleteGame(e, id, name_game)}>
                <img src={deleteIcon} className="main__icon" alt="" />
              </button>
            </div>
            <p className="main__text">{name_game}</p>
          </li>
        ))}
      </ul>

      {isLoading && <Loader />}
    </div>
  );
}
export default Forms;

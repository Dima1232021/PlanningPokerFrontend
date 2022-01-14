import { SET_GAMES, SET_IS_LOADING_GAMES, ADD_OWN_GAME, SET_IS_CREATE_GAME } from "./games";
import { bodyFetch } from "../../../config";

export const gamesActionCreators = {
  setIsLoadingGamesAction: (loading) => ({
    type: SET_IS_LOADING_GAMES,
    payload: loading,
  }),
  setIsCreateGameAction: (isCreateGame) => ({
    type: SET_IS_CREATE_GAME,
    payload: isCreateGame,
  }),

  setGamesAction: (games) => ({
    type: SET_GAMES,
    payload: games,
  }),

  addOwnGame: (game) => ({
    type: ADD_OWN_GAME,
    payload: game,
  }),

  gamesAction: (addError) => (dispatch) => {
    dispatch(gamesActionCreators.setIsLoadingGamesAction(true));
    fetch(...bodyFetch("/games"))
      .then((value) => value.json())
      .then((data) => dispatch(gamesActionCreators.setGamesAction(data)))
      .catch(() => addError("The server does not respond"))
      .finally(() => dispatch(gamesActionCreators.setIsLoadingGamesAction(false)));
  },

  addOwnGameAction: (gameDate, addError) => (dispatch) => {
    dispatch(gamesActionCreators.setIsLoadingGamesAction(true));
    fetch(...bodyFetch("/games/createGame", gameDate))
      .then((value) => value.json())
      .then((data) =>
        data.create ? dispatch(gamesActionCreators.addOwnGame(data.game)) : addError(data.error)
      )
      .catch(() => addError("The server does not respond"))
      .finally(() => dispatch(gamesActionCreators.setIsLoadingGamesAction(false)));
  },
};

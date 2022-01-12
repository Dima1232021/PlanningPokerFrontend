import { SET_GAMES, SET_IS_LOADING_GAMES } from "./games";
import { bodyFetch } from "../../../config";

export const gamesActionCreators = {
  setIsLoadingGamesAction: (loading) => ({
    type: SET_IS_LOADING_GAMES,
    payload: loading,
  }),

  setGamesAction: (games) => ({
    type: SET_GAMES,
    payload: games,
  }),

  gamesAction: (addError) => (dispatch) => {
    dispatch(gamesActionCreators.setIsLoadingGamesAction(true));
    fetch(...bodyFetch("/games"))
      .then((value) => value.json())
      .then((data) => dispatch(gamesActionCreators.setGamesAction(data)))
      .catch(() => addError("The server does not respond"))
      .finally(() => dispatch(gamesActionCreators.setIsLoadingGamesAction(false)));
  },
};

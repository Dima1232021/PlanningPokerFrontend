import { SET_IS_LOADING_GAME, SET_JOIN_THE_GAME } from "./game";
import { bodyFetch } from "../../../config";

export const gameActionCreators = {
  setIsLoadingGameAction: (loading) => ({
    type: SET_IS_LOADING_GAME,
    payload: loading,
  }),
  setJoinTheGame: (data) => ({
    type: SET_JOIN_THE_GAME,
    payload: data,
  }),

  joinTheGameAction: (gameId, addError) => (dispatch) => {
    dispatch(gameActionCreators.setIsLoadingGameAction({ isLoaderPage: true }));
    fetch(...bodyFetch("/game/join_the_game", gameId))
      .then((value) => value.json())
      .then((data) => dispatch(gameActionCreators.setJoinTheGame(data)))
      .catch(() => addError("The server does not respond"))
      .finally(() => dispatch(gameActionCreators.setIsLoadingGameAction({ isLoaderPage: true })));
  },
};

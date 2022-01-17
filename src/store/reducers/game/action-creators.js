import {
  SET_IS_LOADING_GAME,
  SET_JOIN_THE_GAME,
  SET_IS_ACTIVE_MENU,
  CLEARE_DATA_GAME,
} from "./game";
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

  setIsActiveMenu: (isActiveMenu) => ({
    type: SET_IS_ACTIVE_MENU,
    payload: isActiveMenu,
  }),

  clearDataGame: () => ({
    type: CLEARE_DATA_GAME,
  }),

  joinTheGameAction: (gameId, addError) => (dispatch) => {
    dispatch(gameActionCreators.setIsLoadingGameAction({ isLoaderPage: true }));
    fetch(...bodyFetch("/game/join_the_game", gameId))
      .then((value) => value.json())
      .then((data) => dispatch(gameActionCreators.setJoinTheGame(data)))
      .catch(() => addError("The server does not respond"))
      .finally(() => dispatch(gameActionCreators.setIsLoadingGameAction({ isLoaderPage: false })));
  },

  findGameYouHaveJoinedAction: (addError) => (dispatch) => {
    dispatch(gameActionCreators.setIsLoadingGameAction({ isLoaderPage: true }));
    fetch(...bodyFetch("/game/find_game_you_have_joined"))
      .then((value) => value.json())
      .then((data) => dispatch(gameActionCreators.setJoinTheGame(data)))
      .catch(() => addError("The server does not respond"))
      .finally(() => dispatch(gameActionCreators.setIsLoadingGameAction({ isLoaderPage: false })));
  },

  liveTheGameAction: (addError) => (dispatch) => {
    dispatch(gameActionCreators.setIsLoadingGameAction({ isLoaderPage: true }));
    fetch(...bodyFetch("/game/leave_the_game"))
      .then((value) => value.json())
      .then((data) => data.leavetTheGame && dispatch(gameActionCreators.clearDataGame()))
      .catch(() => addError("The server does not respond"))
      .finally(() => dispatch(gameActionCreators.setIsLoadingGameAction({ isLoaderPage: false })));
  },
};

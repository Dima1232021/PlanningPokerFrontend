import {
  SET_IS_LOADING_GAME,
  SET_JOIN_THE_GAME,
  SET_IS_ACTIVE_MENU,
  CLEARE_DATA_GAME,
  SET_IS_ACTIVE_PAGE,
  SET_IS_DATA_GAME,
} from "./game";
import { bodyFetch } from "../../../config";

export const gameActionCreators = {
  setIsLoadingGameAction: (loading) => ({ type: SET_IS_LOADING_GAME, payload: loading }),
  setJoinTheGame: (data) => ({ type: SET_JOIN_THE_GAME, payload: data }),
  setIsActiveMenu: (isActiveMenu) => ({ type: SET_IS_ACTIVE_MENU, payload: isActiveMenu }),
  clearDataGame: () => ({ type: CLEARE_DATA_GAME }),
  setIsActivePage: (isActivePage) => ({ type: SET_IS_ACTIVE_PAGE, payload: isActivePage }),
  setIsDataGame: (data) => ({ type: SET_IS_DATA_GAME, payload: data }),
  changeHistoryNumber: (num) => ({ type: SET_IS_DATA_GAME, payload: num }),

  joinTheGameAction: (urlGame, addError) => (dispatch) => {
    dispatch(gameActionCreators.setIsLoadingGameAction({ isLoaderPage: true }));
    fetch(...bodyFetch("/game/join_the_game", urlGame))
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

  addStoryAction: (dataNewStory, addError) => () => {
    fetch(...bodyFetch("/game/add_history", dataNewStory)).catch(() =>
      addError("The server does not respond")
    );
  },

  editStoryAction: (dataNewStory, addError) => () => {
    fetch(...bodyFetch("/game/edit_history", dataNewStory)).catch(() =>
      addError("The server does not respond")
    );
  },

  removeStoryAction: (storyId, addError) => () => {
    fetch(...bodyFetch("/game/remove_story", storyId)).catch(() =>
      addError("The server does not respond")
    );
  },

  changeDrivingSetingsAction: (gameId, addError) => () => {
    fetch(...bodyFetch("/game/change_driving_Setings", gameId)).catch(() =>
      addError("The server does not respond")
    );
  },

  changeGameSettingsAction: (gameId, addError) => () => {
    fetch(...bodyFetch("/game/change_game_settings", gameId)).catch(() =>
      addError("The server does not respond")
    );
  },

  startPollAction: (dataGame, addError) => () => {
    fetch(...bodyFetch("/game/start_poll", dataGame)).catch(() =>
      addError("The server does not respond")
    );
  },

  flipCardAction: (gameId, addError) => () => {
    fetch(...bodyFetch("/game/flip_card", gameId)).catch(() =>
      addError("The server does not respond")
    );
  },

  resetCardsAction: (dataGame, addError) => () => {
    fetch(...bodyFetch("/game/reset_cards", dataGame)).catch(() =>
      addError("The server does not respond")
    );
  },

  giveAnAnswerAction: (answer, addError) => () => {
    fetch(...bodyFetch("/game/give_an_answer", answer)).catch(() =>
      addError("The server does not respond")
    );
  },
};

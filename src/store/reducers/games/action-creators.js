import {
  SET_GAMES,
  SET_IS_LOADING_GAMES,
  ADD_OWN_GAME,
  SET_IS_CREATE_GAME,
  DELETE_GAME_INVITATION,
  DELETE_GAME,
  SET_ADD_INVITATION,
} from "./games";
import { bodyFetch } from "../../../config";

export const gamesActionCreators = {
  setIsLoadGamesAction: (loading) => ({ type: SET_IS_LOADING_GAMES, payload: loading }),
  setIsCreateGameAction: (isCreateGame) => ({ type: SET_IS_CREATE_GAME, payload: isCreateGame }),
  setGamesAction: (games) => ({ type: SET_GAMES, payload: games }),
  addOwnGame: (game) => ({ type: ADD_OWN_GAME, payload: game }),
  deleteInvitation: (GameId) => ({ type: DELETE_GAME_INVITATION, payload: GameId }),
  deleteGame: (GameId) => ({ type: DELETE_GAME, payload: GameId }),
  setAddInvitation: (invitation) => ({ type: SET_ADD_INVITATION, payload: invitation }),

  getGamesAction: (addError) => (dispatch) => {
    dispatch(
      gamesActionCreators.setIsLoadGamesAction({ isLoadOwnGames: true, isLoadGamesInv: true })
    );
    fetch(...bodyFetch("/games"))
      .then((value) => value.json())
      .then((data) => dispatch(gamesActionCreators.setGamesAction(data)))
      .catch(() => addError("The server does not respond"))
      .finally(() =>
        dispatch(
          gamesActionCreators.setIsLoadGamesAction({ isLoadOwnGames: false, isLoadGamesInv: false })
        )
      );
  },

  addOwnGameAction: (gameDate, addError) => (dispatch) => {
    dispatch(gamesActionCreators.setIsLoadGamesAction({ isLoadCreateGame: true }));
    fetch(...bodyFetch("/games/createGame", gameDate))
      .then((value) => value.json())
      .then((data) =>
        data.create ? dispatch(gamesActionCreators.addOwnGame(data.game)) : addError(data.error)
      )
      .catch(() => addError("The server does not respond"))
      .finally(() =>
        dispatch(gamesActionCreators.setIsLoadGamesAction({ isLoadCreateGame: false }))
      );
  },

  deleteGameAction: (GameId, addError) => (dispatch) => {
    dispatch(gamesActionCreators.setIsLoadGamesAction({ isLoadOwnGames: true }));
    fetch(...bodyFetch("/games/delete_game", GameId))
      .then((value) => value.json())
      .then((data) => data.delete_game && dispatch(gamesActionCreators.deleteGame(GameId.gameId)))
      .catch(() => addError("The server does not respond"))
      .finally(() => dispatch(gamesActionCreators.setIsLoadGamesAction({ isLoadOwnGames: false })));
  },

  deleteInvitationAction: (GameId, addError) => (dispatch) => {
    dispatch(gamesActionCreators.setIsLoadGamesAction({ isLoadGamesInv: true }));
    fetch(...bodyFetch("/game/delete_invited", GameId))
      .then((value) => value.json())
      .then(
        (data) =>
          data.delete_invited && dispatch(gamesActionCreators.deleteInvitation(GameId.gameId))
      )
      .catch(() => addError("The server does not respond"))
      .finally(() => dispatch(gamesActionCreators.setIsLoadGamesAction({ isLoadGamesInv: false })));
  },
};

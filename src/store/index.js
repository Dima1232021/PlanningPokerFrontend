import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { gamesReducer } from "./reducers/games/games";
import { authReducer } from "./reducers/auth/auth";
import { errorReducer } from "./reducers/error/error";
import { gameReducers } from "./reducers/game/game";
import { confirmReducer } from "./reducers/confirm/confirm";

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  games: gamesReducer,
  game: gameReducers,
  confirm: confirmReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

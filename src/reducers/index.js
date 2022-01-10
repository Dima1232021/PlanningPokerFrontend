import { createStore, applyMiddleware, combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { usersReducer } from "./usersReducer";
import { gamesReducer } from "./gamesReducer";
import { errorsReducer } from "./errorsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  games: gamesReducer,
  errors: errorsReducer,
});



export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

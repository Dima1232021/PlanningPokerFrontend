import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { usersReducer } from "../reducers/usersReducer";
import { authReducer } from "./reducers/auth/auth";
import { errorReducers } from "./reducers/error/error";

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducers,
  users: usersReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

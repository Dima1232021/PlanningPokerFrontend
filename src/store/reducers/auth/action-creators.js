import { SET_IS_LOADING, SET_IS_AUTH, SET_LOGOUT } from "./auth";
import { bodyFetch } from "../../../config";

export const authActionCreators = {
  setIsLoadingAction: (loading) => ({
    type: SET_IS_LOADING,
    payload: loading,
  }),

  setIsAuthAction: (user) => ({
    type: SET_IS_AUTH,
    payload: user,
  }),

  setLogout: () => ({
    type: SET_LOGOUT,
  }),

  loginAction: (loginData, addError) => (dispatch) => {
    dispatch(authActionCreators.setIsLoadingAction(true));
    fetch(...bodyFetch("/authenticate/login", loginData))
      .then((value) => value.json())
      .then((data) =>
        data.logged_in
          ? dispatch(authActionCreators.setIsAuthAction(data.user))
          : addError(data.error)
      )
      .catch(() => addError("The server does not respond"))
      .finally(() => dispatch(authActionCreators.setIsLoadingAction(false)));
  },

  createAction: (createData, addError) => (dispatch) => {
    dispatch(authActionCreators.setIsLoadingAction(true));
    fetch(...bodyFetch("/authenticate/create", createData))
      .then((value) => value.json())
      .then((data) =>
        data.logged_in
          ? dispatch(authActionCreators.setIsAuthAction(data.user))
          : addError(data.error)
      )
      .catch(() => addError("The server does not respond"))
      .finally(() => dispatch(authActionCreators.setIsLoadingAction(false)));
  },

  loggedInAction: (addError) => (dispatch) => {
    dispatch(authActionCreators.setIsLoadingAction(true));
    fetch(...bodyFetch("/authenticate/logged_in"))
      .then((value) => value.json())
      .then((data) => data.logged_in && dispatch(authActionCreators.setIsAuthAction(data.user)))
      .catch(() => addError("The server does not respond"))
      .finally(() => dispatch(authActionCreators.setIsLoadingAction(false)));
  },

  logoutAction: (addError) => (dispatch) => {
    dispatch(authActionCreators.setIsLoadingAction(true));
    fetch(...bodyFetch("/authenticate/logout"))
      .then((value) => value.json())
      .then((data) => data.logged_out && dispatch(authActionCreators.setLogout()))
      .catch(() => addError("The server does not respond"))
      .finally(() => dispatch(authActionCreators.setIsLoadingAction(false)));
  },
};

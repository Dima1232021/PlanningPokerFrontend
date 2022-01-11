import { SET_IS_LOADING, SET_IS_AUTH, SET_LOGOUT } from "./auth";
import { bodyFetch } from "../../../config";

export const usersActionCreators = {
  setIsLoadingAction: (loading) => ({
    type: SET_IS_LOADING,
    payload: loading,
  }),

  addUsersAction: () => (dispatch) => {
    dispatch(authActionCreators.setIsLoadingAction(true));
    fetch(...bodyFetch("/authenticate/login", loginData))
      .then((value) => value.json())
      .then((data) => {
        data.logged_in
          ? dispatch(authActionCreators.setIsAuthAction())
          : addError(data.error);
      })
      .catch(() => {
        addError("The server does not respond");
      })
      .finally(() => dispatch(authActionCreators.setIsLoadingAction(false)));
  },
};

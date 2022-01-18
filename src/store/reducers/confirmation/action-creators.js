import { SET_CONFIRM } from "./confirmation";

export const confirmationActionCreators = {
  setConfirm: (data) => ({
    type: SET_CONFIRM,
    payload: data,
  }),
};

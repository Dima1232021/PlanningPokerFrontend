import { SHOW_CONFIRM, HIDE_CONFIRM } from "./confirm";

export const confirmActionCreators = {
  showConfirm: (text) => ({ type: SHOW_CONFIRM, payload: text }),
  hideConfirm: () => ({ type: HIDE_CONFIRM }),
};

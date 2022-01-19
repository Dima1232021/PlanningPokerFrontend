export const SHOW_CONFIRM = "SHOW_CONFIRM";
export const HIDE_CONFIRM = "HIDE_CONFIRM";

const initialState = {
  show: false,
  text: "",
};

export const confirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CONFIRM:
      return {
        show: true,
        text: action.payload,
      };
    case HIDE_CONFIRM:
      return initialState;

    default:
      return state;
  }
};

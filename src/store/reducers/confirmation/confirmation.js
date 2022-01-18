export const SET_CONFIRM = "SET_CONFIRM";

const initialState = {
  question: "",
  isActiveConfirm: false,
  isAnswer: null,
};

export const confirmationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFIRM:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

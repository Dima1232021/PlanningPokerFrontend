const SET_IS_AUTH = "SET_IS_AUTH";
const SET_IS_LOADING = "SET_IS_LOADING";


const initialState = {
  isAuth: false,
  isLoading: false,
  user: { id: null, username: "", email: "" },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_IS_AUTH:
      return { ...state, isLoading: false, user: action.payload, isAuth: true };

    default:
      return state;
  }
};

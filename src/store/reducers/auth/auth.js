export const SET_IS_AUTH = "SET_IS_AUTH";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_LOGOUT = "SET_LOGOUT";

const initialState = {
  isAuth: false,
  isLoading: false,
  userId: null,
  username: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case SET_IS_AUTH:
      return { ...state, ...action.payload };

    case SET_LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};

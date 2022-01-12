export const SET_IS_AUTH = "SET_IS_AUTH";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_LOGOUT = "SET_LOGOUT";

const initialState = {
  isAuth: false,
  isLoading: false,
  id: null,
  username: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case SET_IS_AUTH:
      const { id, username } = action.payload;
      return { ...state, id, username, isAuth: true };

    case SET_LOGOUT:
      return { ...state, id: null, username: "", isAuth: false };

    default:
      return state;
  }
};

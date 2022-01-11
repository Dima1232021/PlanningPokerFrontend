export const ADD_USERS = "SET_USERS";
export const SET_IS_LOADING = "SET_IS_LOADING";

const initialState = {
  isLoading: false,
  users: [],
};

export const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case ADD_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

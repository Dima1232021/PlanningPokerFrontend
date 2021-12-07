const ADD_USERS = "ADD_USERS";
const ADD_USER = "ADD_USER";

const defaultState = {
  users: [],
};

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return { ...state, users: action.payload };

    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };

    default:
      return state;
  }
};

export const addUsersAction = (payload) => ({
  type: ADD_USERS,
  payload: payload,
});

export const addUserAction = (payload) => ({
  type: ADD_USER,
  payload: payload,
});

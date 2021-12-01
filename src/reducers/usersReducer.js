const ADD_USERS = "ADD_USERS";

const defaultState = {
  users: [],
};

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export const addUsersAction = (payload) => ({
  type: ADD_USERS,
  payload: payload,
});

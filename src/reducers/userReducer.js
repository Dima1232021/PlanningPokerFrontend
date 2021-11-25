const ADD_DATA = "ADD_DATA";
const DELETE_DATA = "DELETE_DATA";

const defaultState = {
  logged_in: false,
  username: "",
  email: "",
  userid: null,
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DATA:
      const { logged_in, user } = action.payload;
      return {
        ...state,
        logged_in,
        username: user.username,
        email: user.email,
        userid: user.id,
      };

    case DELETE_DATA:
      return {
        ...state,
        logged_in: false,
        username: "",
        email: "",
        userid: "",
      };

    default:
      return state;
  }
};

export const addUserDataAction = (payload) => ({
  type: ADD_DATA,
  payload: payload,
});

export const deleteUserDataAction = (payload) => ({
  type: DELETE_DATA,
});

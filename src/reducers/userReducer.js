const ADD_DATA = "ADD_DATA";
const DELETE_DATA = "DELETE_DATA";

const defaultState = {
  logged_in: false,
  username: "",
  email: "",
  userid: "",
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return { ...state };

    case DELETE_DATA:
      return { ...state };

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
  payload: payload,
});

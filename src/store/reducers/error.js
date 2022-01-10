const ADD_ERROR = "ADD_ERROR";
const DELETE_ERROR = "DELETE_ERROR";

const initialState = {
  error: [],
  timer: 5000,
};

export const errorReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, errors: [...state.errors, action.payload] };

    case DELETE_ERROR:
      const errors = state.errors.filter((err) => err.id !== action.payload);

      return { ...state, errors };

    default:
      return state;
  }
};

export const addErrorAction = (payload) => ({
  type: ADD_ERROR,
  payload,
});
export const deleteErrorAction = (payload) => ({
  type: DELETE_ERROR,
  payload,
});

export const ADD_ERROR = "ADD_ERROR";
export const DELETE_ERROR = "DELETE_ERROR";

const initialState = {
  error: [],
  timer: 5000,
};

export const errorReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, error: [...state.error, action.payload] };

    case DELETE_ERROR:
      const error = state.error.filter((err) => err.id !== action.payload);
      return { ...state, error };

    default:
      return state;
  }
};

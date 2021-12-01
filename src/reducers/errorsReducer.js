const ADD_ERROR = "ADD_ERROR";
const DELETE_ERROR = "DELETE_ERROR";

const defaultState = {
  errors: [],
};

export const errorsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, errors: [...state.errors, action.payload] };

    case DELETE_ERROR:
      let errors = state.errors.filter((_, index) => index !== 0);
      return { ...state, errors };

    default:
      return state;
  }
};

export const addErrorAction = (payload) => ({
  type: ADD_ERROR,
  payload: payload,
});

export const deleteErrorsAction = () => ({
  type: DELETE_ERROR,
});

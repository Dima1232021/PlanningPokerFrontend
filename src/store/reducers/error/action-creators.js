import { ADD_ERROR, DELETE_ERROR } from "./error";

export const errorActionCreators = {
  addErrorAction: (error) => ({
    type: ADD_ERROR,
    payload: error,
  }),
  deleteErrorAction: (id) => ({
    type: DELETE_ERROR,
    payload: id,
  }),
};

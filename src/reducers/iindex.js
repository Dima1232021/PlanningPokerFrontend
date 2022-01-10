import { errorsReducer } from "./errorsReducer";
import { usersReducer } from "./usersReducer";

export const index = {
  users: usersReducer,
  error: errorsReducer,
};

console.log("index:", index);

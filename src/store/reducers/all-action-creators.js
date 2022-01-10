import { errorActionCreators } from "./error/action-creators";
import { authActionCreators } from "./auth/action-creators";
export const allActionCreators = {
  ...errorActionCreators,
  ...authActionCreators,
};
